export type ErrorResponseSignUp = {
  response: { data: { detail: string | Array<IDetail> } }
}

export type SuccessResponse = {
  id: string
  identity_id: string
  auth: string
  terms_identity?: string
}

export interface IDetail {
  msg: string
}
