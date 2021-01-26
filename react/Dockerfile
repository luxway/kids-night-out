FROM node as builder

WORKDIR /react

COPY ./package.json /react

RUN yarn install

COPY . .

ARG REACT_APP_PAYPAL_SANDBOX

ENV REACT_APP_PAYPAL_SANDBOX $REACT_APP_PAYPAL_SANDBOX

RUN yarn run build

FROM nginx:latest
COPY --from=builder /react/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf