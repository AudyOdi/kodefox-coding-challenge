# People in the Bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (array) of integer arrays (tuples). Each tuple has two numbers:
[num_people_entering, num_people_exiting]

Your task is to return number of people who are still in the bus after the last bus station (after the last tuple). Even though it is the last bus stop, the bus might not be empty.

`numRemaining([[5, 0], [3, 1], [1, 3]]) => 5`
