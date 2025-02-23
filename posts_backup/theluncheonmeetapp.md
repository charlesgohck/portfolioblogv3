---
title: 'The Luncheon Meet App'
date: 'February 23 2025'
excerpt: 'The project that is helping me learn NextJS'
cover_image: 'N/A'
tags: 'life,hobbies'
---
# The Objective
The Luncheon Meet App is a NextJS project that is helping me learn NextJS and React. This is the precursor app to something a little more ambitious later. The app will consist of the following main features:
- Ability to Login to Google securely via OAuth using AuthJS - Completed
- Auto-generation of profile and ability to edit the profile - Needs Rework
- Ability to add new meets, edit meets, and delete meets - Needs Rework
- Join Feature, Leave Feature, Kick Feature, Ban Feature - Pending
- Release Ban Feature - Pending
- Chatroom Feature - Pending
- Landing Page - Pending
- Blog - Pending

# Learnings So Far
Firstly, I've been trying to find ways to shift most of the business logic to the server side for processing. Initially, I used client side on submit functions to make an axios call to the backend to create, update, or delete data because that is how I've always done it in the past. However, I've recently learned of something called server side actions, where NextJS will abstract away the processing on the server side. The functionality will have to be edited. 

Secondly, I've been researching how to do the Chatroom feature. One way is to use web sockets, but I was looking for a simpler solution that would centralize the event notification system. I've settled on the lightweight pub/sub pg_notify functionality from Postgres combined with Server Side Events for updating the brwoser. Whether or not this can be successfully implemented or not remains to be seen. The goal is to have one chatroom user send a message, the app writing to the DB, and then other users receiving the updates right away. 

Lastly, I've learned that using automation will save a lot of time. App Platform from Digital Ocean allows me to focus on the development of the application and not worry about setting up the VMs or containers or other infrastructure like Load Balancers. It is fun to work on the infrastructure, but I just don't have the time to do everything. I've also stumbled onto a really cool CMS platform called Wisp, which helps to automate the content creation and updating for blog posts, meaning I don't have to commit code to update blogs. 

# Source Code
All of the source code will be available here: https://github.com/charlesgohck/luncheonmeet. Github provides a range of really great features for public repositories, including secrets scanning, which is important because some secrets might accidentally go into the commits, which might lead to a security disaster. I've also found that the Gen AI tools are always giving out NextJS 13 code at the moment. My NextJS 15 code is not perfect, but I suppose by making it public it will eventually go into training the future models on how to generate updated NextJS 15 code, which will be good for everyone. 

# Why Luncheon Meet App?
3 use cases:
- Organizing quick/adhoc lunches can be awkward and time consuming. I wanted to find a way where I could just create a quick luncheon meet and then find people to have lunch with just for that day.
- While discussing startup ideas, someone I knew was talking about apps that could help solo travellers quickly find someone to do something with, like a hike. 
- Someone else mentioned that it would be good to have an app where we could quickly find potential startup founders together
I believe all of these use cases fall under the category of the classifieds app. 