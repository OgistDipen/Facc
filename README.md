<h1 align="center">Factory Schedule</h1>

<h3>Running App locally - instructions </h3>

Prerequisites:

installed php 7+
installed mysql
installed apache\
installed composer (php dependency manager)

1. Download or clone git project.
2. Create .env file in server folder and configure database parameters.

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
        DB_PASSWORD=mysql password on your local machine.

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

3. navigate into server folder and run command for installing dependencies:

   composer install

\* Note, it's necessary for you to have following folders in you laravel app(in this case server folder):

    server
        storage
            framework
                views
                cache
                sessions

    If any of the folders in framework folder is missing, create it mannualy.

3. Within server folder, migrate database by running: php artisan migrate<br />
   (Optional) For seed data, run:
   php artisan db:seed
   <br />

Now you should be all set up for checking out app.

Start app by: <br />
php artisan serve

<br />
<hr />

Your backend should be running on your localhost:8000 now.

Frontend :

1. navigate into client folder
2. install dependencies by running: npm install
3. Start frontend from client folder and by running: npm start

Your frontend should be running on your localhost:3000 now.
<br />
<br />

<h2>Docker instructions </h2>
<br />

1. download or clone git project
2. Go into server folder and create .env file.
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

3.  go back to FactoryProject folder and:

docker-compose build <br />
docker-compose up -d

if that fails, try

sudo docker-compose build <br />
sudo docker-compose up -d

server is running on localhost:8080 port
phpmyadmin is running on localhost:8899 port
mysql is on 4306 port

4. bash into container and install dependencies:

   to bush into container run: sudo docker exec -it php /bin/sh
   to fix permission problems, from within bashed container run: chmod -R guo+w storage
   to install dependencies, from within bashed container run: composer install
   to migrate database, from withing bashed container run: php artisan migrate

   php artisan db:seed <br />

   If you encounter any problem, try this solution: <br />

   php artisan config:clear <br />
   php artisan cache:clear <br />

   and after that try again <br />

   php artisan migrate:refresh <br />
   php artisan db:seed <br />

5. Log into phpmyadmin container

go to http://localhost:8899

credentials: <br />

phpmyadmin server: 172.17.0.1:4306 <br />

phpmyadmin username: root <br />

phpmyadmin password: secret <br />

Now go to the localhost:8000 and app will be app and running. Check functionality via postman. <br />

<br />
<hr />

    Antonije Ljubisa
