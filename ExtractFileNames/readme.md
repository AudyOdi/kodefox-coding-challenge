# Extract File Name

Imagine you store file uploads on your server in a directory. Each file uploaded gets a timestamp and random salt appended to the end, to prevent naming collisions and two underscores prepended to the file extension. In the database, we store the full file path.

Create a function that can compute the original filename from the full, saved file path.

`getOriginalName('/data/uploads/Weekly-Sales-1522577812464-nt7a8reuxp.__xls') => 'Weekly-Sales.xls'`
