import IAPIResponse from '../../../types/api-response.interface';
class APIResponse implements IAPIResponse {
  constructor(
    public success: boolean,
    public data: any,
    public message: string,
  ) {}
}
export default APIResponse;
