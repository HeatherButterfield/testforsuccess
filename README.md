# React Bootstrap with Material Design
MDBootstrap for React

## Getting Started
To test, contribute or just see what we did follow few easy steps:
- clone the repository
- cd to the directory with the repository
- run `yarn install` (or `npm install` if you don't use yarn)
- run the app using `yarn start` (or `npm start`)
- to build project use `yarn run build` (od `npm run build`)
- `yarn run remove-demo` (or `npm run remove-demo`) removes demo app pages
- enjoy!

## Bugs
If you want to report a bug or submit your idea feel fre to open an issue

Before you report a bug, please take your time to find if an issue hasn't been reported yet

We're also open to pull requests

## Something Missing?
If you still have some questions do not hesitate to ask us. Open an issue or [visit our Slack](https://mdbbetatest.slack.com)

## Setting Up The DB
We are using Postgres for our DB through Heroku which does not come with a GUI for it natively. This means you will need to download a GUI and connect to Heroku. I used pgadmin but you can use anything that works with Postgres.

Install pgadmin - https://www.pgadmin.org/download/

Log in to Heroku and navigate to the Capstone project (capstone-project should show in the top right).

Make sure you are on the "Apps" tab and click where it says "2 apps" next to test-for-sucess. Select "testforsuccessbeta" as this is where we currently have the DB.

Navigate to the "Resources" tab and then click on "Heroku Postgres".

Navigate to "Settings" and then go to "View Credentials". Leave this page up, this has the setup information we need for pgadmin

Launch pgadmin, on the left-hand side you should see "Servers"

Right click server(s) > create > server …

On the next window fill out the following":

Name: This is solely for you. Name it whatever you want, I chose ‘CS4230’
Under the connection tab: hostname/address. It should look like **-**-**...amazonaws.com
Keep the port at 5432, unless your credentials list otherwise
Maintenance database — this is the database field in the credentials
Username — this is the user field in the credentials
Password — the password field in the credentials. I highly advise checking save password so that you don’t have to copypasta this every time you want to connect.
In the SSL tab, mark SSL mode as require

At this point, if we were to hit ‘save’ (please don’t), something very strange would happen. You’d see hundreds if not thousands of databases appear in pgAdmin. This has to do with how Heroku configures their servers. You’ll still only have access to your specific database, not those of others. In order to avoid parsing so many databases we have to white list only those databases we care about.

Go to the Advanced tab and under db restriction copy the database name (it’s the same value as the Maintenance database field filled earlier).

Now hit 'save', it should connect and you should see your Database name populate. If you expand the views, you go to DB -> Schema -> Tables. 

You are now all set up!
