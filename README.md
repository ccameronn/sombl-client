# Sombl

## Overview

Sombl is a site to plan rehearsals for your group. Be it a 3 person band or a 100 person ensemble, plan it on Sombl.

### Problem

When you take the leap to start a band, choir, musical theatre show, a cappella group, or barbershop quartet, the last thing you want to be worrying about is the logistics of managing a rehearsal plan. Managing your group's rehearsals on Sombl makes this group organisation much smoother, so you can focus on what you do best.

### User Profile

- Performance group manager:
  - looking to create a rehearsal plan for their group
  - looking to share the rehearsal plan with the group members

### Features

- As a user, I want to be able to create and account and a group

- As a logged in user, I want to be able to create a rehearsal
- As a logged in user, I want to be able to edit a rehearsal
- As a logged in user, I want to be able to delete a rehearsal
- As a logged in user, I want to be able to create a gig
- As a logged in user, I want to be able to edit a gig
- As a logged in user, I want to be able to delete a gig

- As a user, I want to be able to view a rehearsal plan that has been shared with me
- As a user, I want to be able to view a rehearsal that has been shared with me
- As a user, I want to be able to view a gig that has been shared with me

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Register/Create Group
- Login
- Home Page
- Rehearsal Details Page
- Gig Details page

### Mockups

#### Home Page

![home-mockup](./src/assets/mockup/home-mockup.png "Home Mockup")

### Endpoints

**GET /rehearsals/:group_id**

- Get list of rehearsals

Parameters:

- longitude: User-provided location as a number
- latitude: User-provided location as a number

Response:

```
[
    {
        "rehearsal_id": 1,
        "name": "Band Practice",
        "time_scheduled": "19:00",
        "date_scheduled": "30/07/2024",
        "location": "Vauxhall Gardens Community Hall",
        "group_id": 4,
        "created_at": "01/04/2024"
    },
    ...
]
```

**POST /rehearsals/:group_id**

- User can add a rehearsal

**PUT /rehearsals/:group_id/:rehearsal_id**

- User edit a rehearsal

(same as above for gigs)

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

## Roadmap

## Nice-to-haves

- Add ToDo List
- Add AI rehearsal generator
- Add a calandr view
- Add file upload funtionailty
