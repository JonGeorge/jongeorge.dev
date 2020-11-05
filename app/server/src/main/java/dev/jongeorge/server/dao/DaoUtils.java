package dev.jongeorge.server.dao;

import dev.jongeorge.server.model.Project;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class DaoUtils {
      protected static HttpRequest buildHttpRequest(String query) {
            Properties props = new Properties();

            String file = "private/db.properties";

            try(FileInputStream in = new FileInputStream(file)) {
                  props.load(in);
            }
            catch(IOException e) {
                  e.printStackTrace();
            }

            HttpRequest.Builder builder = HttpRequest.newBuilder(
                    URI.create(props.getProperty("graphcms.url")));

            builder.header("Authorization",
                           "Bearer " + props.getProperty("graphcms.token"));

            builder.header("Content-Type", "application/json");

            builder.POST(HttpRequest.BodyPublishers.ofString(query));

            return builder.build();
      }

      protected static List<Project> getProjectsFromResponse(String JSONString) {
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
            JSONObject root = new JSONObject(JSONString);

            JSONObject data = root.getJSONObject("data");

            JSONArray projects = data.getJSONArray("projects");

            List<Project> projectList = new ArrayList<>();

            for(int i = 0; i < projects.length(); i++) {
                  JSONObject project = projects.getJSONObject(i);

                  JSONArray contributions = project.getJSONArray("contribution");
                  List<String> contributionList = getListFromJSONArray(contributions);

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

      private static List<String> getListFromJSONArray(JSONArray JSONArray) {
            List<String> list = new ArrayList<>();

            for(int j = 0; j < JSONArray.length(); j++) {
                  String element = JSONArray.getString(j);
                  list.add(element);
            }
            return list;
      }
}
