FROM python:3.8

WORKDIR /api

ADD . /api

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

#RUN chmod +x /app/docker-entrypoint.sh

CMD ["uwsgi", "--ini", "app.ini"]