import urllib
import requests
import pdb
import time

class PyBingException(Exception):
    pass

class PyBingSearch(object):

    QUERY_URL = 'https://api.datamarket.azure.com/Bing/Search/Image' \
                 + '?Query={}&$top={}&$skip={}&$format={}'

    def __init__(self, api_key, safe=False):
        self.api_key = api_key
        self.safe = safe

    def search(self, query, limit=50, offset=0, format='json'):
        ''' Returns the result list, and also the uri for next page (returned_list, next_uri) '''
        return self._search(query, limit, offset, format)

    def search_all(self, query, limit=50, format='json'):
        ''' Returns a single list containing up to 'limit' Result objects'''
        results, next_link = self._search(query, limit, 0, format)
        while next_link and len(results) < limit:
            max = limit - len(results)
            more_results, next_link = self._search(query, max, len(results), format)
            if not more_results:
                break
            results += more_results
        return results

    def _search(self, query, limit, offset, format):
        '''
        Returns a list of result objects, with the url for the next page bing search url.
        '''
        url = self.QUERY_URL.format(urllib.parse.quote("'{}'".format(query)), limit, offset, format)
        r = requests.get(url, auth=("", self.api_key))
        try:
            json_results = r.json()
        except ValueError as vE:
            if not self.safe:
                raise PyBingException("Request returned with code %s, error msg: %s" % (r.status_code, r.text))
            else:
                print("[ERROR] Request returned with code, error msg:. \nContinuing in 5 seconds.")
                time.sleep(5)
        try:
            next_link = json_results['d']['__next']
        except KeyError as kE:
            if not self.safe:
                raise PyBingException("Couldn't extract next_link: KeyError: %s" % kE)
            else:
                print("Couldn't extract next_link: KeyError: %s" % kE)
                time.sleep(3)
            next_link = ''
        return json_results['d']['results'][0]['Thumbnail']['MediaUrl']