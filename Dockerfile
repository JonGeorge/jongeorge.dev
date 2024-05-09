FROM node:18
LABEL authors="jgeorge"
RUN ["mkdir", "/grubfinder"]
WORKDIR "/grubfinder"

EXPOSE 5173
ENV HOST="0.0.0.0"

CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]