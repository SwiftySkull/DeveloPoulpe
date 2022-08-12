<?php

namespace App\Controller;

use App\Entity\Picture;
use App\Repository\AlbumRepository;
use App\Repository\PictureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class PictureController extends AbstractController
{
    private $directoryAttachment;

    public function __construct($directoryAttachment)
    {
        $this->directoryAttachment = $directoryAttachment;
    }

    // #[Route('/', name: 'app_main')]
    // public function index(): JsonResponse
    // {
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/MainController.php',
    //     ]);
    // }

    // #[Route('/ouvrir-toutes-les-photos/{id}', name: 'ouvrir_toutes_les_photos')]
    // public function readAllPictures(PictureRepository $pr): JsonResponse
    // {
    //     $pictures = $pr->findBy(['display' => true]);

    //     // dd($pictures[0]->getAlbum());

    //     return $this->json([
    //         'pictures' => $pictures[0]->getAlbum(),
    //     ], 200, [], ['groups' => ['readAlbum']]);
    // }

    #[Route('/nouvelle-photo', name: 'nouvelle_photo')]
    public function addPicture(PictureRepository $pr, Request $request, EntityManagerInterface $em, SluggerInterface $slugger): JsonResponse
    {
        // $token = $request->request->get('token');
        // if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
        //     throw $this->createAccessDeniedException('Action non autorisée !');
        // }

        $picture = new Picture();

        // $form = $this->createForm(ActualiteType::class, $actualite);
        // $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
            // $picture = $request->files->get('actualite')['picture'];

            // $originalPicture = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
            // $safePicture = $slugger->slug($originalPicture);
            // $newPicture = $safePicture.'-'.uniqid().'.'.$picture->guessExtension();
            // $picturePath = str_replace($this->directoryAttachment, '', $this->getParameter('directory').'/'.$newPicture);

            // try {
            //     $picture->move(
            //         $this->getParameter('directory'),
            //         $newPicture
            //     );
            // } catch (FileException $e) {
            //     // ... handle exception if something happens during file upload
            //     // dd('oups');
            // }


            // $actualite->setPicture($picturePath);
            // // dd($actualite);

            // $actualite = $utils->checkContent($actualite);

            
            // $em->persist($actualite);

            // $em->flush();

            // return $this->redirectToRoute('actu_browse');
        // }
        
        return $this->json([
            'message' => 'Photo ajoutée',
            // 'path' => 'src/Controller/MainController.php',
        ]);
    }
}
