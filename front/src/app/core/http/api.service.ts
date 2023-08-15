import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Base URL for all requests made through this
   * service.
   */
  public apiUrl: string;

  /**
   * HTTP headers applied to all requests made through this
   * service.
   */
   public httpHeaders = new HttpHeaders();

  /**
   * Creates a new HttpApiService instance and initializes it.
   */
  constructor(
    public http: HttpClient,
  ) {
    this.apiUrl = environment.API_URL;
    this.setDefaultHeaders();
  }

  /**
   * Sets the default headers and values for all requests made
   * through this service.
   */
  public setDefaultHeaders(): void {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  /**
   * Returns all headers and values currently beign used by the service.
   */
  public getHeaders(): HttpHeaders {
    return this.httpHeaders;
  }

  public download(url: string, params?: HttpParams): Observable<Object> {
    const opts = {
      headers: this.httpHeaders,
      params: (params ? params : null) as HttpParams,
      // https://github.com/angular/angular/issues/18586#issuecomment-321333934
      responseType: 'text' as 'text'
    };

    if (params) {
      opts.params = params;
    }

    return this.http.get(`${this.apiUrl}${url}`, opts);
  }

  /**
   * Sets a header value for a given name. If the header name already
   * exists, its value is replaced with the given value.
   *
   * @param headerName The header name.
   * @param headerValue Provides the value to set or overide for a given name.
   */
  public setHeader(headerName: string, headerValue: string | string[]): void {
    this.httpHeaders = this.httpHeaders.set(headerName, headerValue);
  }

  /**
   * Checks for existence of a header by a given name. Then deletes all
   * header values for the given name, or logs an error in development mode.
   *
   * @param headerName The header name.
   */
  public deleteHeader(headerName: string): void {
    if (this.httpHeaders.has(headerName)) {
      this.httpHeaders = this.httpHeaders.delete(headerName);
    } else {
      console.warn('Tried to delete a header that does not exist.');
    }
  }

  /**
   * Constructs a `GET` request that interprets the body as a JSON object and
   * returns the response body as a JSON object.
   *
   * @param url The endpoint URL.
   * @param params The HTTP GET parameters.
   *
   * @return An `Observable` of the response body as a JSON object.
   */
  public get<T>(url: string, params?: HttpParams): Observable<T> {
    const opts = {
      headers: this.httpHeaders,
      params: (params ? params : null) as HttpParams,
    };

    if (params) {
      opts.params = params;
    }

    return this.http.get<T>(this.apiUrl + url, opts);
  }

  public getFile<T>(
    url: string,
    params: HttpParams | undefined = undefined
  ): Observable<T> {
    const headers = this.httpHeaders.delete('Content-Type');

    const opts = {
      headers,
      params,
      responseType: 'blob' as any,
    };

    if (params) {
      opts.params = params;
    }

    return this.http.get<T>(this.apiUrl + url, opts);
  }

  /**
   * Constructs a `POST` request that interprets the body as a
   * JSON object and returns the response body as a JSON object.
   *
   * @param url The endpoint URL.
   * @param body The content to replace with.
   *
   * @return An `Observable` of the response, with the response body as a JSON object.
   */
  public post<T>(url: string, body?: any): Observable<T> {
    let postBody = body;
    const opts = {
      headers: this.httpHeaders,
    };

    if (!postBody) {
      postBody = {};
    }

    return this.http.post<T>(this.apiUrl + url, postBody, opts);
  }

  /**
   * Constructs a `PUT` request that interprets the body as a JSON object and
   * returns the response body as a JSON object.
   *
   * @param url The endpoint URL.
   * @param body The resources to add/update.
   *
   * @return An `Observable` of the response, with the response body as a JSON object.
   */
  public put<T>(url: string, body?: any): Observable<T> {
    let putBody = body;
    const opts = {
      headers: this.httpHeaders,
    };

    if (!putBody) {
      putBody = {};
    }

    return this.http.put<T>(this.apiUrl + url, putBody, opts);
  }

  /**
   * Constructs a `DELETE` request that interprets the body as a JSON object and
   * returns the response body as a JSON object.
   *
   * @param url The endpoint URL.
   *
   * @return An `Observable` of the response, with the response body of type `Object`.
   */
  public delete<T>(url: string): Observable<T> {
    const opts = {
      headers: this.httpHeaders,
    };

    return this.http.delete<T>(this.apiUrl + url, opts);
  }
}
