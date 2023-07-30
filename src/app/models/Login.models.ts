export namespace LoginModel {
  export interface Login {
    success: boolean;
    expires_at: string;
    request_token: string;
  }
}
