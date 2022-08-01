from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch(
    cloud_id="test:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDhhNDk1M2YyZGE3ODQ0YWRiYzVjOTY5MmYyMDYyMTkwJDJiMWUwYjZlODY4OTQ2NzBhYWVlNmJkYWM4ZTUxN2I2",
    basic_auth=("elastic", "jW54Ed8bra2yyvWlWOzj2SNd")
)

doc = {
    'author': 'nerderbur',
    'text': 'this is a text search',
    'timestamp': datetime.now(),
}

twitter_mapping = {
    "mappings": {
        "properties": {
            "username": {"type": "text"},
            "message": {"type": "text"},
            "post_date": {"type": "date"},
        }
    }
}

# resp = es.index(index='test_index', document=doc)
# print(resp)

search_term = "nerd"

resp = es.search(index="test_index", query={"multi_match": {
    "query":      search_term,
    "type":       "best_fields",
    "fields":     ["author", "text"],
    "operator":   "or",
    "type": "phrase_prefix"
}})
print("Got %d Hits:" % resp['hits']['total']['value'])
for hit in resp['hits']['hits']:
    print("%(timestamp)s %(author)s: %(text)s" % hit["_source"])
