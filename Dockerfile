FROM node:18
LABEL authors="jgeorge"
RUN ["mkdir", "/jongeorge"]
WORKDIR "/jongeorge"

EXPOSE 3000
ENV HOST="0.0.0.0"

CMD ["nodejs", "build/index.js"]