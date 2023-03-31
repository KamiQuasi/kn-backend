FROM quay.io/chapeaux/deno:latest

WORKDIR /app
COPY ./* ./

ENV PORT 8080
EXPOSE 8080

CMD ["deno","task","serve"]