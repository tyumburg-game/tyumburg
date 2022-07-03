import { BaseAPI } from "../base-api";
import {
  GetServiceIdResposeData,
  SignInWithYandexRequestData,
} from "./api.types";
import { OAuthPaths } from "./paths";

class OAuthAPI extends BaseAPI {
  constructor() {
    super(OAuthPaths.oAuthApiRoot);
  }

  getServiceId() {
    return this.instance.get<GetServiceIdResposeData>(OAuthPaths.serviceId, {
      query: { redirect_uri: OAuthPaths.redirectURI },
    });
  }

  async signInWithYandex(code: string): Promise<void> {
    const data: SignInWithYandexRequestData = {
      code,
      redirect_uri: OAuthPaths.redirectURI,
    };

    return this.instance.post<void>("/", { data });
  }
}

export const oAuthApi = new OAuthAPI();
