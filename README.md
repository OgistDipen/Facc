<h1 align="center">Factory Schedule</h1>

<h3>Running App locally - instructions </h3>

Prerequisites:

installed PHP 7+ <br />
installed MySQL <br />
installed apache/Nginx<br />
installed composer (PHP dependency manager) <br />

1. Download or clone this git project.

2. Create a .env file inside the server folder and configure database parameters.

this is my .env file on local machine (sharing this kind of info is fine in this situation.):
Be sure to do this according to your configuration.

        APP_NAME=Laravel
        APP_ENV=local
        APP_KEY=base64:whds5mJ7o9CNZFnNGXKXraLENB6XKaWere8rZ+3/Xco=
        APP_DEBUG=true
        APP_URL=http://localhost

        LOG_CHANNEL=stack

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=factory_schedule
        DB_USERNAME=root
        DB_PASSWORD=mysql database password on your local machine.

        BROADCAST_DRIVER=log
        CACHE_DRIVER=file
        QUEUE_CONNECTION=sync
        SESSION_DRIVER=file
        SESSION_LIFETIME=120

        REDIS_HOST=127.0.0.1
        REDIS_PASSWORD=null
        REDIS_PORT=6379

        MAIL_MAILER=smtp
        MAIL_HOST=smtp.mailtrap.io
        MAIL_PORT=2525
        MAIL_USERNAME=null
        MAIL_PASSWORD=null
        MAIL_ENCRYPTION=null
        MAIL_FROM_ADDRESS=null
        MAIL_FROM_NAME="\${APP_NAME}"

        AWS_ACCESS_KEY_ID=
        AWS_SECRET_ACCESS_KEY=
        AWS_DEFAULT_REGION=us-east-1
        AWS_BUCKET=

        PUSHER_APP_ID=
        PUSHER_APP_KEY=
        PUSHER_APP_SECRET=
        PUSHER_APP_CLUSTER=mt1

        MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
        MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

        JWT_SECRET=pAiZzVTkpTY7RSParn4mTDnFAZAGvMW3Aj1rTo0RC6NpMG2Iux61Jzr7HG1l1PbO

3. Navigate into the server folder and run command for installing dependencies:

   composer install <br />
   php artisan key:generate <br />
   php artisan jwt:secret <br />
   php artisan cache:clear <br />
   php artisan config:clear <br />

\* Note, it's necessary for you to have following folders in you laravel app(in this case server folder):

    server
        storage
            framework
                views
                cache
                sessions

    If any of the folders in framework folder is missing, create it mannualy.

3. Within the server folder, migrate the database by running: <br />
   php artisan migrate<br /><br />

   (Optional) For seeding data, run: <br />
   php artisan db:seed
   <br />

Start backend by running the next command from server folder: <br />

php artisan serve

<br />
Your backend should be running on your localhost:8000

<br />
<hr />

Frontend :

1. navigate into the client folder
2. install dependencies by running: npm install
3. Start frontend from the client folder by running: npm start

<br />

Your frontend should be running on your localhost:3000.
<br />
<br />

<hr />

<h2>Docker instructions </h2>
<br />

Prerequisites:

installed Docker<br />
installed composer (PHP dependency manager) <br />
<br />

1. download or clone this git project
2. Go into the server folder and create a .env file.
   Configure it according to docker-compose.yml file

My working example is as follows (yours should be the same).

    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=base64:m0W15G/sD1uazI99c5EWX8/XXaW9AzwXiCyjG4JNGps=
    APP_DEBUG=true
    APP_URL=http://localhost

    LOG_CHANNEL=stack

    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=factory_schedule
    DB_USERNAME=root
    DB_PASSWORD=secret

    BROADCAST_DRIVER=log
    CACHE_DRIVER=file
    QUEUE_CONNECTION=sync
    SESSION_DRIVER=file
    SESSION_LIFETIME=120

    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    MAIL_MAILER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null
    MAIL_FROM_ADDRESS=null
    MAIL_FROM_NAME="\${APP_NAME}"

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=

    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=mt1

    MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
    MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

    JWT_SECRET=RbJp1xN3qSelSUil81zikAgHdRLEp0LtuSs8VoB9zuuuxnam0rukNmRKnuoBpTlMySnCSQYsxiL9iMhXfMYLNxwzrR09CAMptY46vomHmGZ6lAvRFadakrM7H9zEgJOl

3.  go back to the root folder and:

sudo docker-compose build <br />
sudo docker-compose up -d

check running containers by running: <br />
sudo docker container ps -a

The server is running on localhost:8000 port <br />
PHPMyAdmin is running on localhost:8899 port <br />
MySQL is running on 4306 port <br />

4. Steps to create factory_schedule database:

Log into PHPMyAdmin container

go to http://localhost:8899

credentials: <br />

    phpmyadmin server: 172.17.0.1:4306
    phpmyadmin username: root
    phpmyadmin password: secret

5. to install dependencies, go inside the server folder and run: <br />
   composer install<br />

6. To fix laravel permissions, we need to bash into a container from our root folder:

   From the root folder run: sudo docker exec -it php /bin/sh <br />
   To fix permission problems, from within the bashed container run: chmod -R guo+w storage <br />
   To migrate the database, from withing the bashed container run: php artisan migrate <br />

   (Optional) - to seed the database run: <br />
   php artisan db:seed <br /> <br />

   If you encounter any problem, try this solution: <br />

   php artisan cache:clear <br />
   php artisan config:clear <br />
   chmod -R 777 storage/ <br />
   composer dump-autoload <br />

   and after that try again <br />

   php artisan migrate:fresh <br /><br />

   Now go to the localhost:8000 and backend will be up and running. <br />
   Frontend will be up and running on localhost:3000 <br />

    <br />
    <hr />

For any questions, please contact me on: ogistdipen@outlook.com <br />

Ogist Dipen
