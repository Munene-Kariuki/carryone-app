import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  categories = [
  'Civil-Works',
  'Commercial & Industrial',
  'Fit-Out Works',
  'Medical-Facility',
  'Office-Block',
  'Residential',
  'Retail',
  'Hotel',
  'School'
  ];

  activeCategory = 'Civil-Works';

  projects = [
    {
      title:'Road contruction',
      category:'Civil-Works',
      image: '/assets/projects/project1.jpg'
    },
    {
      title:'Contruction',
      category:'Civil-Works',
      image: 'assets/projects/project4.jpeg'
    },
    {
      title:'Contruction',
      category:'Office-Block',
      image: '../../assets/projects/project4.jpeg'
    }
  ]
  get filteredProjects(){
    return this.projects.filter(
      p=>p.category===this.activeCategory
    );
  }
}
