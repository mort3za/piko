interface StatusPayload {
  status: string;
  in_reply_to_status_id?: string;
  auto_populate_reply_metadata?: boolean;
  exclude_reply_user_ids?: number;
  attachment_url?: string;
  media_ids?: number;
  possibly_sensitive?: boolean;
  lat?: number;
  long?: number;
  place_id?: string;
  display_coordinates?: boolean;
  trim_user?: boolean;
  enable_dmcommands?: boolean;
  fail_dmcommands?: boolean;
  card_uri?: string;
  tweet_mode?: string;
}

interface TimelinePaginationParams {
  count: number;
  since_id: string;
  max_id: string;
  trim_user: boolean;
  exclude_replies: boolean;
  include_entities: boolean;
  tweet_mode: string;
}
