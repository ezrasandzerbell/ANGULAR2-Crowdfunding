import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;
  constructor(private projectService: ProjectService) { }


  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate){
    console.log(projectToUpdate);
    this.projectService.updateProject(projectToUpdate);
  }

  editFormShow = false;

  editClicked() {
    this.editFormShow = true;
  }
  editCancel() {
    this.editFormShow = false;
  }
  beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
