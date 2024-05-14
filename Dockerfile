FROM node:18 as build
LABEL authors="jgeorge"
RUN ["mkdir", "/jongeorge"]
WORKDIR "/jongeorge"
COPY . /jongeorge
RUN ["npm", "i"]
RUN ["npm", "run", "build"]

FROM node:18
RUN ["mkdir", "/jongeorge"]
WORKDIR "/jongeorge"
COPY --from=build /jongeorge/ /jongeorge/
ENV HOST="0.0.0.0"
EXPOSE 3000
CMD ["node", "build/index.js"]