package dev.jongeorge.server.api;

import dev.jongeorge.server.model.Project;
import dev.jongeorge.server.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api/v1/projects")
@RestController
public class ProjectController {
      private final ProjectService projectService;

      @Autowired
      public ProjectController(ProjectService projectService) {
            this.projectService = projectService;
      }

      @GetMapping
      public List<Project> getAllProjects() {
            return projectService.getAllProjects();
      }

}
