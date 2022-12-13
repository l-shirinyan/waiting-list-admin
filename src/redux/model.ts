export type ErrorResponseSignUp = {
  response: { data: { detail: string | Array<IDetail> } }
}

export type SuccessResponse = {
  id: string
}

export interface IDetail {
  msg: string
}
