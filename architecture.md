# Architecture

## Database design 
I started tinkering with Hasura to create the db schema. 

### Table names 
I made 3 tables

#### feedbackBase

Not sure what to name it. When a user creates a link for a feedback, one row is added here. It has the URL and optionally a title for the feedback. It should contain the owner right? 


#### reviewes
Each time a user submits a review we get a row here. 

#### users



### Figuring out Hasura 


Right now I got this mutation that can create a sample feedback 

```
mutation insert_feedback {
  insert_feedbackBase_one(object: {url: "adsfasdfa-asdfasdfa", owner: "96590de7-2bd7-447e-bc3d-5603258223da"}) {
    id
  }
}
```
