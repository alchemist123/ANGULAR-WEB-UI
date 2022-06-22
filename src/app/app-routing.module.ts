import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/guest/login/login.component';
import { SchoolRegisterComponent } from './pages/guest/school-register/school-register.component';
import { ParentsComponent } from './pages/school/parents/parents.component';
import { SchoolDashboardComponent } from './pages/school/school-dashboard/school-dashboard.component';
import { SchoolMasterpageComponent } from './pages/school/school-masterpage/school-masterpage.component';
import { StaffManagementComponent } from './pages/school/staff-management/staff-management.component';
import { StudentManagementComponent } from './pages/school/student-management/student-management.component';
import { TeacherManagementComponent } from './pages/school/teacher-management/teacher-management.component';
import { ClassManagementComponent } from "./pages/school/class-management/class-management.component"
import { SubjectManagementComponent } from "./pages/school/subject-management/subject-management.component"
import { StudentMappingComponent } from './pages/school/student-mapping/student-mapping.component';
import { TeacherMappingComponent } from './pages/school/teacher-mapping/teacher-mapping.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherMasterpageComponent } from './pages/teacher/teacher-masterpage/teacher-masterpage.component';
import { SubjectsComponent } from './pages/teacher/subjects/subjects.component';
import { ChapterSelectionComponent } from './pages/teacher/chapter-selection/chapter-selection.component';
import { ChapterSublevelsComponent } from './pages/teacher/chapter-sublevels/chapter-sublevels.component';
import { BoardChooserComponent } from './tools/board-chooser/board-chooser.component';
import { GoogleSlideCreatorComponent } from './components/digitalboard/tools/google-slide-creator/google-slide-creator.component';
import { RichTextEditorComponent } from './components/digitalboard/tools/rich-text-editor/rich-text-editor.component';
import { PDFFileUploadComponent } from "./components/digitalboard/tools/pdffile-upload/pdffile-upload.component"
import { QAndAComponent } from './components/digitalboard/tools/q-and-a/q-and-a.component';
import { StudentMasterpageComponent } from './pages/student/student-masterpage/student-masterpage.component';
import { StudentSubjectsComponent } from './pages/student/student-subjects/student-subjects.component';
import { StudentChapterSelectionComponent } from './pages/student/student-chapter-selection/student-chapter-selection.component'
import { BookViewComponent } from './pages/student/book-view/book-view.component'
import { AssesmentQuestionsComponent } from './pages/student/assesment-questions/assesment-questions.component';
import { ProfilePageComponent } from './components/shared/profile-page/profile-page.component';
import { ReportComponent } from './pages/teacher/report/report.component';
import { StudentMarksOverviewComponent } from './pages/teacher/reports/student-marks-overview/student-marks-overview.component';
import { DetailedStudentAnswersViewComponent } from './pages/teacher/reports/detailed-student-answers-view/detailed-student-answers-view.component';
import { UnderstandingReportsComponent } from './pages/teacher/reports/understanding-reports/understanding-reports.component';
import { UnderstandingReportsDetailedViewComponent } from './pages/teacher/reports/understanding-reports-detailed-view/understanding-reports-detailed-view.component';
import { CreateSimpleActivityComponent } from './pages/teacher/activities/create-simple-activity/create-simple-activity.component';
import { ParentMasterpageComponent } from './pages/parent/parent-masterpage/parent-masterpage.component';
import { ParentDashboardComponent } from './pages/parent/parent-dashboard/parent-dashboard.component';
import { ActivityReportsComponent } from  "./pages/teacher/reports/activity-reports/activity-reports.component"
import { PrincipalMasterpageComponent } from './pages/principal/principal-masterpage/principal-masterpage.component';
import { ClassListComponent } from './pages/principal/reports/class-list/class-list.component';
import { SkillsHomeComponent } from './pages/digital-skills/skills-home/skills-home.component';
import { AdobeSparkComponent } from './components/digitalboard/tools/adobe-spark/adobe-spark.component';
import { StudentsListComponent } from './pages/parent/reports/students-list/students-list.component';
import { SubjectSelectionComponent } from "./pages/parent/reports/subject-selection/subject-selection.component"
import { LessonSelectionComponent } from './pages/parent/reports/lesson-selection/lesson-selection.component';
import { ReportSelectionComponent } from './pages/parent/reports/report-selection/report-selection.component';
import { AssesmentQuestionReportsComponent } from './pages/parent/reports/assesment-question-reports/assesment-question-reports.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { CmMasterpageComponent } from './pages/cm/cm-masterpage/cm-masterpage.component';
import { CmDigitalSkillListComponent } from './pages/cm/cm-digital-skill-list/cm-digital-skill-list.component';
import { CmAddNewDigitalSkillComponent } from './pages/cm/cm-add-new-digital-skill/cm-add-new-digital-skill.component';
import { CmManageDigtialSkillContentComponent } from './pages/cm/cm-manage-digtial-skill-content/cm-manage-digtial-skill-content.component';
import { CmDigitalSkillContentListComponent } from './pages/cm/cm-digital-skill-content-list/cm-digital-skill-content-list.component';
import { DigitalSkillViewComponent } from './pages/student/digital-skill-view/digital-skill-view.component';
import { DigitalSkillTypesComponent } from './pages/student/digital-skill-types/digital-skill-types.component';
import { DigitalSkillListComponent } from './pages/student/digital-skill-list/digital-skill-list.component';
import { DigitalSkillComponentViewComponent } from './components/digital-skills/digital-skill-component-view/digital-skill-component-view.component';
import { StageListComponent } from './components/digital-skills/stage-list/stage-list.component';
import { DigitalSkillMappingComponent } from './pages/school/digital-skill-mapping/digital-skill-mapping.component';
import { DigitallSkillClassesComponent } from './pages/teacher/digitall-skill-classes/digitall-skill-classes.component';
import { DigitallSkillValuationListComponent } from './pages/teacher/digitall-skill-valuation-list/digitall-skill-valuation-list.component';
import { DigitallSkillValuationSubmissionsComponent } from './pages/teacher/digitall-skill-valuation-submissions/digitall-skill-valuation-submissions.component';
import { DigitallSkillSubmissionsComponent } from './pages/teacher/digitall-skill-submissions/digitall-skill-submissions.component';
import { DigitalSkillMentorsComponent } from './pages/school/digital-skill-mentors/digital-skill-mentors.component';
import { ActivityReportDetailedViewComponent } from './pages/teacher/reports/activity-report-detailed-view/activity-report-detailed-view.component';
import { DashboardComponent } from './pages/teacher/dashboard/dashboard.component';
import { SectionHeadsComponent } from './pages/school/section-heads/section-heads.component';
import { SectionDashboardComponent } from './pages/teacher/section-dashboard/section-dashboard.component';
import { DashboardComponent as PrincipalDashboard } from './pages/principal/dashboard/dashboard.component';
import { TeacherProfileComponent } from './pages/teacher/teacher-profile/teacher-profile.component';
import { SchoolProfileComponent } from './pages/school/school-profile/school-profile.component';
import { ForgotPasswordComponent } from './pages/guest/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './pages/guest/confirm-password/confirm-password.component';
import { SectionClassesComponent } from './pages/principal/section-classes/section-classes.component';
import { ClassSubjectsComponent } from './pages/principal/class-subjects/class-subjects.component';
import { ChaptersComponent } from './pages/principal/chapters/chapters.component';
import { ExperientialLearningComponent } from './pages/teacher/activities/experiential-learning/experiential-learning.component';
import { SectionSubjectsComponent } from './pages/teacher/section-subjects/section-subjects.component';
import { SectionChapaterListComponent } from './pages/teacher/section-chapater-list/section-chapater-list.component';
import {AuthGuardGuard} from './guard/auth-guard.guard'
import { ClassDashboardComponent } from './pages/teacher/class-dashboard/class-dashboard.component';
import { ClassTeacherListComponent } from './pages/school/class-teacher-list/class-teacher-list.component';
import { AddChapterModalComponent } from './components/modals/lessons/add-chapter-modal/add-chapter-modal.component';
import { ChapterMicrounitCountModalComponent } from './pages/teacher/chapter-microunit-count-modal/chapter-microunit-count-modal.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { modalConfigDefaults } from 'ngx-bootstrap/modal/modal-options.class';
import { CalendarModalComponent } from './pages/calendar-modal/calendar-modal.component';
import { PrincipalReportComponent } from './pages/principal/principal-report/principal-report.component';
import { ActivityReportOverviewComponent } from './pages/principal/reports/activity-report-overview/activity-report-overview.component';
import { componentFactoryName } from '@angular/compiler';
import { SelfAssessmentReportComponent } from './pages/principal/reports/self-assessment-report/self-assessment-report.component';
import { SimpleActivityReportComponent } from './pages/principal/reports/simple-activity-report/simple-activity-report.component';
import { PostAssessmentStudentReportComponent } from './pages/principal/reports/post-assessment-student-report/post-assessment-student-report.component';
import { HodDashboardComponent } from './pages/teacher/hod-dashboard/hod-dashboard.component';
import { HodListClassesComponent } from './pages/teacher/HOD/hod-list-classes/hod-list-classes.component';
import { HodListLessonComponent } from './pages/teacher/HOD/hod-list-lesson/hod-list-lesson.component';
import { LessonSubLevelsComponent } from './pages/teacher/HOD/lesson-sub-levels/lesson-sub-levels.component';
import { HodBookViewComponent } from './pages/teacher/HOD/hod-book-view/hod-book-view.component';
import { StudentRegisterComponent } from './pages/guest/student-register/student-register.component';
import { RegistrationOtpModalComponent } from './pages/guest/registration-otp-modal/registration-otp-modal.component';
import { NotificationComponent } from './pages/teacher/notification/notification.component';
import { ActivityListSelectionComponent } from './pages/teacher/activity-list-selection/activity-list-selection.component';
import { HodMappingComponent } from './pages/school/hod-mapping/hod-mapping.component';
import { HodMappingModalComponent } from './components/modals/onboarding/hod-mapping-modal/hod-mapping-modal.component';
import { CmLabComponent } from './pages/cm/cm-lab/cm-lab.component';
import { LabNewCourseModalComponent } from './pages/cm/lab-new-course-modal/lab-new-course-modal.component';
import { LabMicrocontrollerComponent } from './pages/cm/lab-microcontroller/lab-microcontroller.component';
import { LabInventoryModalComponent } from './pages/cm/lab-inventory-modal/lab-inventory-modal.component';
import { CmBookViewComponent } from './pages/cm/cm-book-view/cm-book-view.component';
import { CmSideNavigationComponent } from './pages/cm/cm-side-navigation/cm-side-navigation.component';
import { CmUnitViewComponent } from './pages/cm/cm-unit-view/cm-unit-view.component';
import { ContentViewComponent } from './pages/cm/content-view/content-view.component';
import { StudentLabComponent } from './pages/student/student-lab/student-lab.component';
import { TeacherLabComponent } from './pages/teacher/teacher-lab/teacher-lab.component';
import { TeacherSwitchBackComponent } from './pages/school/teacher-switch-back/teacher-switch-back.component';
import { LabChallengesModalComponent } from './pages/cm/lab-challenges-modal/lab-challenges-modal.component';
import { CmChallengeTaskComponent } from './pages/cm/cm-challenge-task/cm-challenge-task.component';
import { CmTaskModalComponent } from './pages/cm/cm-task-modal/cm-task-modal.component';
import { TaskMediaUploadModalComponent } from './pages/cm/task-media-upload-modal/task-media-upload-modal.component';
import { TeacherLabEvaluationComponent } from './pages/teacher/teacher-lab-evaluation/teacher-lab-evaluation.component';
import { ChapterSublevelPresentModalComponent } from './pages/teacher/chapter-sublevel-present-modal/chapter-sublevel-present-modal.component';
import { CmFeedbackMainComponent } from './pages/cm/cm-feedback-main/cm-feedback-main.component';
import { CmFeedbackModalComponent } from './pages/cm/cm-feedback-modal/cm-feedback-modal.component';
import { TeacherLabEvaluationCourseListComponent } from './pages/teacher/teacher-lab-evaluation-course-list/teacher-lab-evaluation-course-list.component';
import { TeacherLabEvaluationStudentSelectionComponent } from './pages/teacher/teacher-lab-evaluation-student-selection/teacher-lab-evaluation-student-selection.component';
import { TeacherEvaluationStudentDataComponent } from './pages/teacher/teacher-evaluation-student-data/teacher-evaluation-student-data.component';
import { TeacherEvaluationTaskContentComponent } from './pages/teacher/teacher-evaluation-task-content/teacher-evaluation-task-content.component';
import { TeacherEvaluationChallengeTaskFeedbackModalComponent } from './pages/teacher/teacher-evaluation-challenge-task-feedback-modal/teacher-evaluation-challenge-task-feedback-modal.component';
import { StudentNotAttendedModalComponent } from './pages/teacher/reports/student-not-attended-modal/student-not-attended-modal.component';
import { StudentDeactivateConfirmationModalComponent } from './pages/teacher/student-deactivate-confirmation-modal/student-deactivate-confirmation-modal.component';
import { StudentPromotionFilterComponent } from './pages/school/student-promotion-filter/student-promotion-filter.component';
import { StudentPromotionClassSelectionModalComponent } from './pages/school/student-promotion-class-selection-modal/student-promotion-class-selection-modal.component';
import { StudentTransferModalComponent } from './pages/school/student-transfer-modal/student-transfer-modal.component';
import { SectionMappingComponent } from './pages/school/section-mapping/section-mapping.component';
import { AddSectionModalComponent } from './components/modals/onboarding/add-section-modal/add-section-modal.component';
import { ListClassesComponent } from './pages/student/previous-year-data/list-classes/list-classes.component';
import { ListPreviousSubjectComponent } from './pages/student/previous-year-data/list-previous-subject/list-previous-subject.component';
import { ActivityReviewRejectCommentModalComponent } from './pages/teacher/reports/activity-review-reject-comment-modal/activity-review-reject-comment-modal.component';
import { StudentNotificationComponent } from './pages/student/student-notification/student-notification.component';
import { UnitComponent } from './pages/teacher/unit/unit.component';
import { AddUnitModalComponent } from './pages/teacher/add-unit-modal/add-unit-modal.component';
import { StudentUnitSelectionComponent } from './pages/student/student-unit-selection/student-unit-selection.component';
import { KeyConceptFrameComponent } from './components/lessons/lesson-preparation/key-concept-frame/key-concept-frame.component';
import { StudentUnitThemeModalComponent } from './pages/student/student-unit-theme-modal/student-unit-theme-modal.component';
import { PrincipalUnitViewComponent } from './pages/principal/principal-unit-view/principal-unit-view.component';
import { CmLevelUpComponent } from './pages/cm/cm-level-up/cm-level-up.component';
import { CmBatchesComponent } from './pages/cm/cm-batches/cm-batches.component';
import { TeacherBatchManageComponent } from './pages/teacher/teacher-batch-manage/teacher-batch-manage.component';
import { TeacherBatchModuleComponent } from './pages/teacher/teacher-batch-module/teacher-batch-module.component';
import { BatchDetailsComponent } from './pages/teacher/batch-details/batch-details.component';
import { TeacherLabAllModulesComponent } from './pages/teacher/teacher-lab-all-modules/teacher-lab-all-modules.component';
import { ChapterSelectionDirectComponent } from './pages/teacher/chapter-selection-direct/chapter-selection-direct.component';
import { ScientificActivityComponent } from './components/lessons/learning/scientific-activity/scientific-activity.component';
import { KgChaptersComponent } from './pages/teacher/KG/kg-chapters/kg-chapters.component';


const routes: Routes = [
  {
    path:"", component: LoginComponent,
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"school-register", component: SchoolRegisterComponent
  },

  {
    path:"forgot-password", component:ForgotPasswordComponent
  },
  {
    path:"confirm-password/:token" , component:ConfirmPasswordComponent
  },
  {
    path: "student-register", component: StudentRegisterComponent
  },
  {
    path: "email-registration-otp", component: RegistrationOtpModalComponent
  },
  
  
  {
    path:"school",
    component: SchoolMasterpageComponent,
    
    children:[
      {
        path:"home",
        component:SchoolDashboardComponent
      },
      {
        path:'parents',
        component:ParentsComponent
      },
      {
        path: 'students',
        component:StudentManagementComponent
      },
      {
        path: 'teachers',
        component:TeacherManagementComponent
      },
      {
        path: 'staffs',
        component:StaffManagementComponent
      },
      {
        path: 'classes',
        component: ClassManagementComponent
      },
      {
        path: 'subjects',
        component: SubjectManagementComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },

      {
        path:"student-mapping",
        component:StudentMappingComponent
      },
      {
        path:"teacher-mapping",
        component: TeacherMappingComponent
      },
      {
        path: "digital-skill-mapping",
        component: DigitalSkillMappingComponent
      },
      {
        path: "mentor-teacher-mapping",
        component: DigitalSkillMentorsComponent
      },
      {
        path: "section-head-mapping",
        component: SectionHeadsComponent
      },
      {
        path:"school-profile",
        component:SchoolProfileComponent
      },
      {
        path: "class-teachers",
        component: ClassTeacherListComponent
      },
      {
        path: "calendar",
        component : CalendarComponent
      },
      {
        path : "calendar-modal",
        component : CalendarModalComponent 
      },
      {
        path: "hod-mapping",
        component:HodMappingComponent
      },
      {
        path:"hod-mapping-modal",
        component:HodMappingModalComponent
      },
      {
        path:"teacher-switch",
        component:TeacherSwitchBackComponent
      },
      {
        path:"student-promotion-filter",
        component:StudentPromotionFilterComponent
      },
      {
        path:"student-promotion-class-selection-modal",
        component:StudentPromotionClassSelectionModalComponent
      },
      {
        path:"student-transfer-modal",
        component:StudentTransferModalComponent
      },
      {
        path:"section-mapping",
        component:SectionMappingComponent
      },
      {
        path:"add-section-modal",
        component:AddSectionModalComponent
      }

  ]
  },
  {
    path: "principal",
    component: PrincipalMasterpageComponent,
    children:[
      {
        path:"home",
        component: PrincipalDashboard
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path: "calendar",
        component : CalendarComponent
      },
    ]
    },
  {
    path: "teacher",
    component: TeacherMasterpageComponent,
   
    children:[
      {
        path:"home",
        component: TeacherDashboardComponent
       
      },
      {
        path: "subjects",
        component: SubjectsComponent
      },
      {
        path: "unit/:id/:type",
        component: UnitComponent
      },
      {
        path:"add-unit-modal",
        component: AddUnitModalComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path: "chapters/:id/:type",
        component: ChapterSelectionDirectComponent
      },
      {
        path: "chapters/:id/:parentId/:parentLessonId",
        component: ChapterSelectionComponent
      },
      {
        path: "sublevels/:id",
        component: ChapterSublevelsComponent
      },
      {
        path: "sublevels/:id/:type",
        component: ChapterSublevelsComponent
      },
      {
        path: "sublevels/:id/:parentLessonId/:unitId",
        component: ChapterSublevelsComponent
      },

      {
        path: "digital-board/:id/:type",
        component: BoardChooserComponent
      },
      {
        path: "google-slide-create/:id/:type",
        component: GoogleSlideCreatorComponent
      },
      {
        path: "google-slide-create/:id/:type/:componentId",
        component: GoogleSlideCreatorComponent
      },
      {
        path: "rich-text-editor/:id/:type",
        component: RichTextEditorComponent
      },
      {
        path: "rich-text-editor/:id/:type/:componentId",
        component: RichTextEditorComponent
      },
      {
        path: "adobe-spark/:id/:type",
        component: AdobeSparkComponent
      },
      {
        path: "adobe-spark/:id/:type/:componentId",
        component: AdobeSparkComponent
      },
      {
        path: "pdf-file-uploader/:id/:type",
        component: PDFFileUploadComponent
      },
      {
        path: "pdf-file-uploader/:id/:type/:componentId",
        component: PDFFileUploadComponent
      },
      {
        path:"q-and-a/:id/:type",
        component:QAndAComponent
      },
      {
        path:"q-and-a/:id/:type/:componentId",
        component:QAndAComponent
      },
      {
        path:"bookView/:id",
        component: BookViewComponent
      },
      {
        path:"reports/:id",
        component: ReportComponent
      },
      {
        path: "overview-marks/:lessonId/:type",
        component: StudentMarksOverviewComponent
      },
      {
        path:"detailed-answers/:lessonId/:type/:studentId",
        component: DetailedStudentAnswersViewComponent
      },
      {
        path: 'understanding-question-report-overview/:lessonId',
        component: UnderstandingReportsComponent
      },
      {
        path: 'understanding-question-report-details',
        component: UnderstandingReportsDetailedViewComponent
      },
      {
        path: "create-simple-activity/:id/:type",
        component: CreateSimpleActivityComponent
      },
      {
        path: "create-simple-activity/:id/:type/:componentId",
        component: CreateSimpleActivityComponent
      },
      {
        path: "activity-reports/:lessonid/:type",
        component: ActivityReportsComponent
      },
      {
        path:"key-concepts",
        component:KeyConceptFrameComponent
      },
      {
        path: "digital-skill-classses",
        component: DigitallSkillClassesComponent,
      },
      {
        path:"digital-skill-evaluation-list/:standardId/:divisionId",
        component: DigitallSkillValuationListComponent
      },
      {
        path:"digital-skill-evaluation-submissions/:standardId/:divisionId/:skillId",
        component: DigitallSkillValuationSubmissionsComponent
      },
      {
        path:"digital-skill-submissions/:standardId/:divisionId/:assignmentId",
        component: DigitallSkillSubmissionsComponent
      },
      {
        path:"digital-skill", 
        component: DigitalSkillViewComponent
      },
      {
        path:"digital-skill-types", 
        component:DigitalSkillTypesComponent
      },
      {
        path:"digital-skill-list/:type",
        component: DigitalSkillListComponent
      },
      {
        path: "digital-skill-view/:lessonId", 
        component: DigitalSkillComponentViewComponent
      },
      {
        path:"digital-skill-stages",
        component: StageListComponent
      },
      {
        path:"detailed-activity-report/:id/:contentId/:status/:type",
        component: ActivityReportDetailedViewComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        
        data: {
          shouldReuse: true
          },
      },
     
      {
        path:"section-dashboard",
        component: SectionDashboardComponent,
        
        data: {
          shouldReuse: true
          },
      },
      {
        path:"teacher-profile",
        component:TeacherProfileComponent
      },
      {
        path: "manage-experiential-activity/:id/:type",
        component: ExperientialLearningComponent
      },
      {
        path: "manage-experiential-activity/:id/:type/:componentId",
        component: ExperientialLearningComponent
      },
      {
        path:"scientific-activity/id",
        component:ScientificActivityComponent
      },
     
      {
        path:"section-subjects/:standard/:division",
        component: SectionSubjectsComponent
      },
      {
        path: "section-chapters/:id", 
        component:SectionChapaterListComponent
      },
      {
        path: "class-dashboard",
        component: ClassDashboardComponent,
        data: {
          shouldReuse: true
          },
      },
      {
        path: "addChapterModal",
        component: AddChapterModalComponent
      },
      {
        path: "addMicrounitModal",
        component : ChapterMicrounitCountModalComponent
      },
      {
        path: "calendar",
        component : CalendarComponent
      },
      {
        path: "hod",
        component: HodDashboardComponent
      },
      {
        path: "hod-list-classes/:id/:standardId/:divisionId",
        component: HodListClassesComponent
      },
      {
        path: "hod-list-lesson/:id",
        component: HodListLessonComponent
      },

      {
        path:"lesson-sub-level/:id",
        component:LessonSubLevelsComponent
      },
      {
        path:"hod-bookView/:id",
        component:HodBookViewComponent
      },
      {
        path:"notification",
        component:NotificationComponent
      },
      {
        path:"activity-list/:lessonId",
        component:ActivityListSelectionComponent
      },
      {
        path: "teacher-lab",
        component:TeacherLabComponent
      },
      {
        path: "teacher-lab/:id",
        component:TeacherLabComponent
      },
      
      {
        path:"side-navigation/:id",
        component:CmSideNavigationComponent
      },
      {
        path:"unit-view/:id",
        component:CmUnitViewComponent
      },
      {
        path:"unit-view/:id/:moduleId",
        component:CmUnitViewComponent
      },
   
      {
        path:"teacher-lab-evaluation",
        component:TeacherLabEvaluationComponent
      },
      {
        path: "chapter-sublevel-present-modal",
        component: ChapterSublevelPresentModalComponent
      },
      {
        path: "teacher-lab-evaluation-course-list/:batchId",
        component:TeacherLabEvaluationCourseListComponent
      },
      {
        path:"teacher-evaluation-student-selection/:batchId/:id",
        component:TeacherLabEvaluationStudentSelectionComponent
      },
      {
        path:"teacher-evaluation-student-data/:id",
        component:TeacherEvaluationStudentDataComponent
      },
      {
        path:"teacher-evaluation-task-content/:id/:studentId",
        component:TeacherEvaluationTaskContentComponent
      },

      // {
      //   path:"teacher-evaluation-task-contents/:taskId/studentsId",
      //   component:TeacherEvaluationTaskContentComponent
      // },
      
      {
        path: "teacher-evaluation-task-feedback",
        component :TeacherEvaluationChallengeTaskFeedbackModalComponent
      },
      {
        path:"teacher-not-attended",
        component:StudentNotAttendedModalComponent
      },
      {
        path:"student-deactivate-modal",
        component:StudentDeactivateConfirmationModalComponent
      },
      {
        path:"activity-review-modal",
        component:ActivityReviewRejectCommentModalComponent
      },
      {
        path:"teacher-batch-manage",
        component:TeacherBatchManageComponent
      },
      {
        path:"teacher-batch-module/:id",
        component:TeacherBatchModuleComponent
      },
      {
        path:"teacher-batch/:id",
        component:BatchDetailsComponent
      },
      {
        path:"teacher-all-modules/:id",
        component:TeacherLabAllModulesComponent      
     },
     {
       path:"kg-chapters/:id",
       component:KgChaptersComponent
     }
     
  
    ]
  },
  {
    path:"student", 
    component:StudentMasterpageComponent, 
    children:[
      {
        path:"home", component:StudentDashboardComponent
      },
      {
        path:"subjects", 
        component: StudentSubjectsComponent
      },
      {
        path:"unit/:id",
        component:StudentUnitSelectionComponent
      },
      {
        path:"unit-theme-modal",
        component:StudentUnitThemeModalComponent
      },
      {
        path: "chapters/:id",
        component: StudentChapterSelectionComponent
      },
      {
        path:"bookView/:id",
        component: BookViewComponent
      },
      {
        path: "getAssesmentQuestions/:lessonId/:type",
        component: AssesmentQuestionsComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path:"digital-skill", 
        component: DigitalSkillViewComponent
      },
      {
        path:"digital-skill-types", 
        component:DigitalSkillTypesComponent
      },
      {
        path:"digital-skill-list/:type",
        component: DigitalSkillListComponent
      },
      {
        path: "digital-skill-view/:lessonId", 
        component: DigitalSkillComponentViewComponent
      },
      {
        path:"digital-skill-stages",
        component: StageListComponent
      },
      {
        path: "calendar",
        component : CalendarComponent
      },
      {
        path: "lab-main",
        component: CmLabComponent
      },
      {
        path: "student-batches",
        component:TeacherLabComponent
      },
      {
        path:"student-batch/:id",
        component:BatchDetailsComponent
      },
      {
        path:"student-lab",
        component:StudentLabComponent
      },
      {
        path:"book-view/:id",
        component:CmBookViewComponent
      },
      {
        path:"side-navigation/:id",
        component:CmSideNavigationComponent
      },
      {
        path:"unit-view/:id",
        component:CmUnitViewComponent
      },
     
      {
        path:"list-classes",
        component:ListClassesComponent
      },
      {
        path:"list-previous-subjects",
        component:ListPreviousSubjectComponent
      },
      {
        path:"student-notification",
        component:StudentNotificationComponent
      }
    ]
  },
  {
    path: "parent", component: ParentMasterpageComponent,
    children:[
      {
        path:"home",
        component: ParentDashboardComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path:"student-list", 
        component: StudentsListComponent
      },
      {
        path:"subject-list/:studentId/:divisionId/:standardId", 
        component: SubjectSelectionComponent
      },
      {
        path:"lesson-list/:subjectId/:studentId",
        component: LessonSelectionComponent
      },
      {
        path: "report-selection/:lessonId/:studentId",
        component: ReportSelectionComponent
      },
      {
        path:"assesment-reports/:lessonId/:studentId/:type", 
        component: AssesmentQuestionReportsComponent
      },
      {
        path: "activity-reports/:lessonid",
        component: ActivityReportsComponent
      },
      {
        path: "calendar",
        component : CalendarComponent
      },
      // {
      //   path: "reports",
      //   component: ReportsComponent
      // }
    ]
  },
  {
    path: "principal",
    component: PrincipalMasterpageComponent,
    children:[
      {
        path:"report-class-list",
        component: ClassListComponent
      },
      {
        path: 'section-classes/:sectionId',
        component: SectionClassesComponent
      },
      {
        path: "subjects/:standard/:division",
        component: ClassSubjectsComponent

      },
      {
        path:"unit-view/:id",
        component:PrincipalUnitViewComponent
      },
      {
        path:"chapter-list/:id", component:ChaptersComponent
      },
      {
        path:"bookView/:id",
        component: BookViewComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path: "principal-report",
        component: PrincipalReportComponent
      },
      {
        path: "pre-assessment-report-overview",
        component: ActivityReportOverviewComponent
      },
      {
        path: "self-assessment-report",
        component: SelfAssessmentReportComponent
      },
      {
        path: "simple-activity",
        component: SimpleActivityReportComponent
      },
      {
        path:"post-assessment-report",
        component: PostAssessmentStudentReportComponent
      }
    ]
  },
  {
    path:"cm", component:CmMasterpageComponent,
    children:[
      {
        path:"skill-list",
        component: CmDigitalSkillListComponent
      },
      {
        path:"create-new-skill",
        component: CmAddNewDigitalSkillComponent
      },
      {
        path:"edit-skill/:skillId",
        component: CmAddNewDigitalSkillComponent
      },
      {
        path:"manage-skill-content/:lessonId",
        component: CmManageDigtialSkillContentComponent
      },
      {
        path:"manage-skill-content/:lessonId/:contentId",
        component: CmManageDigtialSkillContentComponent
      },
      {
        path:"skill-content-list/:lessonId",
        component: CmDigitalSkillContentListComponent
      },
      {
        path: "cm-lab-main",
        component: CmLabComponent
      },
      {
        path:"cm-lab-course-modal",
        component: LabNewCourseModalComponent
      },
      {
        path:"microcontroler/:parentLessonId",
        component:LabMicrocontrollerComponent
      },
      {
        path:"lab-inventory-modal",
        component:LabInventoryModalComponent
      },
      
      {
        path:"side-navigation",
        component:CmSideNavigationComponent
      },
      {
        path:"unit-view",
        component:CmUnitViewComponent
      },
      {
        path:"content-view/:id",
        component:ContentViewComponent
      },
      {
        path:"lab-challenges-modal",
        component:LabChallengesModalComponent
      },
      {
        path: "cm-challenge-task/:id",
        component:CmChallengeTaskComponent
      },
      {
        path: "cm-task-modal",
        component: CmTaskModalComponent
      },
      {
        path:"task-media-modal",
        component:TaskMediaUploadModalComponent
      },
      {
        path: "cm-feedback",
        component:CmFeedbackMainComponent
      },
      {
        path: "cm-review-feedback-modal",
        component:CmFeedbackModalComponent
      },
      {
        path:"cm-level-up",
        component:CmLevelUpComponent
      },
      {
        path:"cm-batches",
        component:CmBatchesComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
