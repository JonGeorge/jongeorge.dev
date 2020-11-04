package dev.jongeorge.server.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Project {
      private final String title;
      private final String clientCompany;
      private final String clientDepartment;
      private final List<String> contribution;
      private final String description;

      public Project(@JsonProperty("title") String title,
                     @JsonProperty("clientCompany") String clientCompany,
                     @JsonProperty("clientDepartment") String clientDepartment,
                     @JsonProperty("contribution") List<String> contribution,
                     @JsonProperty("description") String description) {

            this.title = title;
            this.clientCompany = clientCompany;
            this.clientDepartment = clientDepartment;
            this.contribution = contribution;
            this.description = description;

      }

      public String getTitle() {
            return title;
      }

      public String getClientCompany() {
            return clientCompany;
      }

      public String getClientDepartment() {
            return clientDepartment;
      }

      public List<String> getContribution() {
            return contribution;
      }

      public String getDescription() {
            return description;
      }
}
