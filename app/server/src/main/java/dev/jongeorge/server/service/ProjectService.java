package dev.jongeorge.server.service;

import dev.jongeorge.server.dao.ProjectDAO;
import dev.jongeorge.server.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
      private final ProjectDAO projectDAO;

      @Autowired
      public ProjectService(@Qualifier("GraphCMS") ProjectDAO projectDAO) {
            this.projectDAO = projectDAO;
      }

      public List<Project> getAllProjects() {
            return projectDAO.getAllProjects();
      }

}
