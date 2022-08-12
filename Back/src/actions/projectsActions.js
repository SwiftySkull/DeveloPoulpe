// ACTIONS TYPES

export const DISPLAY_WEBSITE_INFOS = 'DISPLAY_WEBSITE_INFOS';

// ACTIONS CREATORS

export const displayWebsiteInfos = (websiteId) => ({
  type: DISPLAY_WEBSITE_INFOS,
  websiteId,
});
