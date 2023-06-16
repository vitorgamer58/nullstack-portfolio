/* eslint-disable no-useless-constructor */
import { ObjectId } from 'mongodb'

export class SummaryModel {

  constructor(
    public name: string,
    public intro: string,
    public role: string,
    public image: string,
    public id?: ObjectId,
  ) {}

}

export class roleModel {

  constructor(public jobName: string, public description: string, public startDate: Date, public endDate?: Date) {}

}

export class WorkExperiencesModel {

  constructor(public logo: string, public companyName: string, public roles: roleModel[], public id?: ObjectId) {}

}

export class PersonalProjectsModel {

  constructor(
    public projectName: string,
    public description: string,
    public demoLink: string,
    public sourceLink: string,
    public id?: ObjectId,
  ) {}

}

export class OpenSourceContribsModel {

  constructor(public title: string, public description: string, public link: string, public id?: ObjectId) {}

}

export class EducationModel {

  constructor(
    public university: string,
    public degree: string,
    public field: string,
    public startDate: string,
    public stillLearning: boolean,
    public description: string,
    public endDate?: string,
    public id?: ObjectId,
  ) {}

}