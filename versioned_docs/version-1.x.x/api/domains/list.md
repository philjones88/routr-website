# listDomains

This method returns a list of Domain resources.

**URL**

`/domains`

**Method**

`GET`

**Parameters**

| Parameter Name | Type   | Value | Description
| ---  | :--------- |  :--------- |  :--------- |
| filter |  query | string | Use filter to narrow the elements shown |
| page   |  query | number | Pagination index |
| itemsPerPage |  query | number | Number of elements per request |

Note: The filter parameter uses [JsonPath](https://github.com/json-path/JsonPath) format

**Request body**

Do not supply a request body with this method.

**Response**

If successful this method returns a list of Domain resources.

**Sample Call**

```json
GET /api/{apiversion}/domains
{

}

HTTP/1.1 200 OK
{
  "status": "200",
  "message": "Successful request",
  "meta": {
    "currentPage": 1,
    "totalPages": 1,
    "itemsPerPage": 30,
    "totalItems": 1
  },  
  "data" : [{
  	"apiVersion": "v1beta1",
  	"kind": "Domain",
  	"metadata": {
  		"name": "Another Office",
      "ref": "dm6c87r2"
  	},
  	"spec": {
  		"context": {
  			"domainUri": "sip2.local"
  		}
  	}
  }]
}
```
