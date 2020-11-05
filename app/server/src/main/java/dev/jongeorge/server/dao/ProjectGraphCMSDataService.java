package dev.jongeorge.server.dao;

import dev.jongeorge.server.model.Project;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@Repository("GraphCMS")
public class ProjectGraphCMSDataService implements ProjectDAO {
      private HttpClient client = HttpClient.newHttpClient();

      @Override
      public List<Project> getAllProjects() {

            HttpRequest request = DaoUtils.buildHttpRequest(Query.GET_ALL_PROJECTS);

            HttpResponse response = null;
            try {
                  response = client.send(request, HttpResponse.BodyHandlers.ofString());
            }
            catch(IOException | InterruptedException e) {
                  e.printStackTrace();
            }

            String JSONStringResponse = response.body().toString();

            return DaoUtils.getProjectsFromResponse(JSONStringResponse);
      }
}
