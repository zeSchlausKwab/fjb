import NDK from "@nostr-dev-kit/ndk";
import { NDKPrivateKeySigner } from "@nostr-dev-kit/ndk";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.NSEC) {
  throw new Error("NSEC environment variable is required");
}

class NDKService {
  private static instance: NDKService;
  public ndk: NDK;

  private constructor() {
    const signer = new NDKPrivateKeySigner(process.env.NSEC);

    this.ndk = new NDK({
      explicitRelayUrls: [
        "wss://nos.lol",
        "wss://nostr.land",
        "wss://nostr.wine",
        "wss://purplerelay.com",
        "wss://relay.damus.io",
        "wss://relay.snort.social",
      ],
      signer,
    });
  }

  public static getInstance(): NDKService {
    if (!NDKService.instance) {
      NDKService.instance = new NDKService();
    }
    return NDKService.instance;
  }
}

export const ndkService = NDKService.getInstance();
