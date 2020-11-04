package dev.jongeorge.server.dao;

import dev.jongeorge.server.model.Project;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.*;

@Repository("GraphCMS")
public class ProjectGraphCMSDataService implements ProjectDAO {
      private HttpClient client = HttpClient.newHttpClient();

      @Override
      public List<Project> getAllProjects() {
            Properties props = new Properties();

            String file = "private/db.properties";

            try(FileInputStream in = new FileInputStream(file)) {
                  props.load(in);
            }
            catch(IOException e) {
                  e.printStackTrace();
            }

            System.out.println(props.getProperty("graphcms.url"));
            System.out.println(props.getProperty("graphcms.token"));

            String query = "" +
                    "{\"query\":\"" +
                    "   {\\n" +
                    "    projects {\\n" +
                    "    title\\n" +
                    "    clientCompany\\n" +
                    "    clientDepartment\\n" +
                    "    contribution\\n" +
                    "    description\\n" +
                    "  }\\n" +
                    "}\",\"variables\":{}}";

            HttpRequest.Builder builder = HttpRequest.newBuilder(
                    URI.create(props.getProperty("graphcms.url")));

            builder.header("Authorization",
                           "Bearer " + props.getProperty("graphcms.token"));

            builder.header("Content-Type", "application/json");

            builder.POST(HttpRequest.BodyPublishers.ofString(query));

            HttpRequest request = builder.build();

            HttpResponse response = null;
            try {
                  response = client.send(request, HttpResponse.BodyHandlers.ofString());
            }
            catch(IOException e) {
                  e.printStackTrace();
            }
            catch(InterruptedException e) {
                  e.printStackTrace();
            }

            System.out.println(response.statusCode());
            System.out.println(response.body());

            /*
             * Expected response schema:
             * {
             *    "data": {
             *          "projects": [
             *                {
             *                      "title": value,
             *                      "clientCompany": "value",
             *                      "clientDepartment": "value",
             *                      "contribution": [
             *                             "value 1",
             *                             "value 2"
             *                      ],
             *                      "description":"value"
             *                 }
             *          ]
             *    }
             */
            JSONObject root = new JSONObject(response.body().toString());

            JSONObject data = root.getJSONObject("data");

            JSONArray projects = data.getJSONArray("projects");

            List<Project> projectList = new ArrayList<>();
            for(int i = 0; i < projects.length(); i++) {
                  JSONObject project = projects.getJSONObject(i);

                  List<String> contributionList = new ArrayList<>();

                  JSONArray contributions = project.getJSONArray("contribution");
                  for(int j = 0; j < contributions.length(); j++) {
                        String contribution = contributions.getString(j);
                        contributionList.add(contribution);
                  }

                  String title = project.getString("title");
                  String clientCompany = project.getString("clientCompany");
                  String clientDepartment = project.getString("clientDepartment");
                  String description = project.getString("description");

                  Project newProject = new
                          Project(
                                  title,
                                  clientCompany,
                                  clientDepartment,
                                  contributionList,
                                  description);

                  projectList.add(newProject);
            }

            return projectList;
      }
}
