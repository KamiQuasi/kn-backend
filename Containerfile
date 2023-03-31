FROM quay.io/chapeaux/deno:latest

WORKDIR /app
COPY ./* ./

ENV PORT 8080
ENV DENO_DIR /app/cache
EXPOSE 8080

RUN deno task build

CMD ["kn-backend"]