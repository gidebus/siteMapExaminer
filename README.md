# siteMapExaminer

## Overview
This code is a basic microservice architecture where a client allows the user to input a product identifier. The client then sends this information to the server which is in charge of searching and finding the appropiate url of the product within an xml file and then proceed to scrape the information for such product. This information is passed to the client which will display the name, title, and price of the product.

## How to Run
Once the file has been cloned into your computer navigate to the main directory of the application. You will notice two folders: server, and client. From different terminals navigate to client on one and server on the other and run `npm install` on both to install dependencies, then run the following commands from each of directories:

On `/client`:
```
  nodemon app.js
```

On `/server`:
```
  nodemon index.js
```
Once both servers are up and running, proceed to your browser and input `localhost:3000/search` on the address bar. 

From there search away using the search bar!

## Additional Questions

1. How does your system work? (if not addressed in comments in the source)
The program consists of a client-side web interface built using HTML, CSS, and JavaScript (with Bootstrap and Axios libraries). The user can input a product identifier, and when the "Search" button is clicked, the client sends a request to the server. The server, built using Node.js and Express, fetches product data from an external app and returns it to the client. The client then displays the product data on the web page.

2. How could you scale your system to search across all sitemap files?
To scale the program we could create multiple instances or microservices handling different parts of the sitemap files concurrently. Additionally, caching the information, or adding a database could be implemented to reduce redundancy on fetching and also speed the search speed. 

3. How will your system perform with 100 users? 10,000 users? 1,000,000 users?
The performance of the system largely depends on where the service will be located. If it is 100 users, I believe the program could perform well, but with over 10,000 the program might perform poorly or crash. The program would require to be improved to sustain such a demand.

4. What documentation, websites, papers, etc., did you consult in doing this assignment?
As a resource I used the official documentation of Cheerio, Express, Node, Stackoverflow, and also based myself a lot on programs I did before, and courses I took from Udemy.

5. How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it, and how would you prioritize each item?
It took me a while to have this program running as I am relatively new to node. I am more familiar with Ruby on Rails but have decided to learn something more popular, and it was a challenge. I would probably read more on Jest and add tests to my code, something I do when coding in Ruby. I would have also added a database, better, and more informative error handling on both endpoints, and also improve user experience as the ui and speed of the program are not the best currently.

6. If you were to critique your code, what would you have to say about it?
I would say the code is a good starting point for the functionality requested, but it is not at a point that I would be satisfied with my work. As mentioned previously, adding tests in a TDD manner would have been ideal, better error handling and informative messages, and also improve the overall speed and UI of the app are lacking (I am more of backend person).

7. How can you change your system to be updated to support simple keyword searches?
To support simple keywords would depend on the actual functionality. The server searches a file that contains links so the keywords would need to match the specific part of the link. From the top of my head I could say that we could change the client to accept keywords and have the backend either use regex to match for a partial product, return the first match, return all matches if desired. Another way could be to use a loop involving the window pattern and match the keyword to each url. Another way could be to use some JS native methods, but again it would all depend on the functionality that would be requested when inputting a keyword.

Thanks a lot for your time and cosideration!
