<?php

namespace App\Controller;

use App\Entity\Album;
use App\Repository\AlbumRepository;
use App\Repository\PictureRepository;
use ContainerAJF4Pfz\getDoctrineService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class AlbumController extends AbstractController
{
    private $directoryAttachment;
    // private $directory;

    public function __construct($directoryAttachment, $directory)
    {
        $this->directoryAttachment = $directoryAttachment;
        // $this->directory = $directory;
    }

    // #[Route('/', name: 'app_main')]
    // public function index(): JsonResponse
    // {
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/MainController.php',
    //     ]);
    // }

    #[Route('/ouvrir-tous-les-albums', name: 'ouvrir_tous_les_album')]
    public function readAllAlbum(AlbumRepository $ar): JsonResponse
    {
        $albums = $ar->findBy(['display' => true]);

        return $this->json([
            'albums' => $albums,
        ], 200, [], ['groups' => ['readAllAlbum']]);
    }

    #[Route('/ouvrir-album/{id}', name: 'ouvrir_album')]
    public function readAlbum(AlbumRepository $ar, $id, PictureRepository $pr): JsonResponse
    {
        $album = $ar->findBy(['id' => $id, 'display' => true]);
        $pictures = $pr->findBy(['album' => $album]);

        return $this->json([
            'album' => $album,
            'pictures' => $pictures,
        ], 200, [], ['groups' => ['readAlbum']]);
    }

    #[Route('/nouvel-album', name: 'nouvel_album', methods: ['POST'])]
    public function addAlbum(AlbumRepository $ar, Request $request, EntityManagerInterface $em, SluggerInterface $slugger): JsonResponse
    {
        // $token = $request->request->get('token');
        // if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
        //     throw $this->createAccessDeniedException('Action non autorisée !');
        // }

        $album = new Album();

        $album->setName($request->request->get('name'));
        $album->setDescription($request->request->get('description'));
        $picture = $request->files->get('picture');

        $originalPicture = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
        $safePicture = $slugger->slug($originalPicture);
        $newPicture = $safePicture.'-'.uniqid().'.'.$picture->guessExtension();

        try {
            $picture->move(
                $this->getParameter('directory').'/album/',
                $newPicture
            );
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
            // dd('oups');
        }

        $album->setPicture('/album/'.$newPicture);
        $album->setDisplay(true);

        $em->persist($album);
        $em->flush();

        return $this->json([
            'message' => 'Album ajouté',
            'newAlbum' => $album,
        ], 201, [], ['groups' => 'newAlbum']);
    }

    #[Route('/afficher-album/{id}', name: 'afficher_album')]
    public function displayAlbum(AlbumRepository $ar, $id, EntityManagerInterface $em): JsonResponse
    {
        $album = $ar->find($id);

        $album->setDisplay(!$album->isDisplay());

        $em->persist($album);
        $em->flush();

        return $this->json([
            'message' => $album->isDisplay() ? 'Album affiché' : 'Album caché',
        ], 202);
    }

    #[Route('/edition-album/{id}', name: 'edition_album', methods: ['PATCH'])]
    public function editAlbum(AlbumRepository $ar, Request $request, EntityManagerInterface $em, $id, SerializerInterface $serializer): JsonResponse
    {
        // $token = $request->request->get('token');
        // if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
        //     throw $this->createAccessDeniedException('Action non autorisée !');
        // }

        $album = $ar->find($id);

        $jsonContent = $request->getContent();

        $serializer->deserialize(
            $jsonContent,
            Album::class,
            'json',
            [AbstractNormalizer::OBJECT_TO_POPULATE => $album]
        );
        
        $em->persist($album);
        $em->flush();

        return $this->json([
            'message' => 'Album modifié',
        ], 200, [], ['groups' => 'newAlbum']);
    }

    #[Route('/edition-album-photo/{id}', name: 'xxxxxxxxxxxxx')]
    public function editAlbumPhoto(AlbumRepository $ar, Request $request, EntityManagerInterface $em, $id, SluggerInterface $slugger, Filesystem $filesystem): JsonResponse
    {
        // $token = $request->request->get('token');
        // if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
        //     throw $this->createAccessDeniedException('Action non autorisée !');
        // }
        
        $album = $ar->find($id);

        if (null !== $album->getPicture() && $filesystem->exists($album->getPicture())) {
            $filesystem->remove($album->getPicture());
        };

        $picture = $request->files->get('picture');

        $originalPicture = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
        $safePicture = $slugger->slug($originalPicture);
        $newPicture = $safePicture.'-'.uniqid().'.'.$picture->guessExtension();

        try {
            $picture->move(
                $this->getParameter('directory').'/album/',
                $newPicture
            );
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
            // dd('oups');
        }

        $album->setPicture('/album/'.$newPicture);
        
        $em->persist($album);
        $em->flush();

        return $this->json([
            'message' => 'Album modifié avec photo',
        ], 200, [], ['groups' => 'newAlbum']);
    }
}
