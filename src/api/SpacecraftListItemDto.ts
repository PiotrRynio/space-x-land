export type SpacecraftListItemDto = {
  details: string;
  id: string;
  launch_date_utc: string;
  links: {
    flickr_images: string[];
    mission_patch: string;
    wikipedia: string;
  };
  mission_name: string;
};
