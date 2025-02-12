import { NDKEvent } from "@nostr-dev-kit/ndk";
import { ndkService } from "./ndk";

class PublishService {
  private static instance: PublishService;

  private constructor() {}

  public static getInstance(): PublishService {
    if (!PublishService.instance) {
      PublishService.instance = new PublishService();
    }
    return PublishService.instance;
  }

  async publishText(content: string, tags: string[][] = []): Promise<NDKEvent> {
    const event = new NDKEvent(ndkService.ndk);

    event.kind = 1;
    event.content = content;
    event.tags = tags;

    await event.publish();
    return event;
  }

  async publishMetadata(metadata: {
    name?: string;
    about?: string;
    picture?: string;
  }): Promise<NDKEvent> {
    const event = new NDKEvent(ndkService.ndk);

    event.kind = 0;
    event.content = JSON.stringify(metadata);

    await event.publish();
    return event;
  }

  async publishCustom(
    kind: number,
    content: string,
    tags: string[][] = []
  ): Promise<NDKEvent> {
    const event = new NDKEvent(ndkService.ndk);

    event.kind = kind;
    event.content = content;
    event.tags = tags;

    await event.publish();
    return event;
  }
}

export const publishService = PublishService.getInstance();
