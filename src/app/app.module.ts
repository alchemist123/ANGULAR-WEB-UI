import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/guest/login/login.component';
import { SchoolRegisterComponent } from './pages/guest/school-register/school-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { SchoolMasterpageComponent } from './pages/school/school-masterpage/school-masterpage.component';
import { SchoolDashboardComponent } from './pages/school/school-dashboard/school-dashboard.component';
import { ParentsComponent } from './pages/school/parents/parents.component';
import { AddParentModalComponent } from './components/modals/onboarding/add-parent-modal/add-parent-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { StudentManagementComponent } from './pages/school/student-management/student-management.component';
import { AddStudentModalComponent } from './components/modals/onboarding/add-student-modal/add-student-modal.component';
import { AddTeacherModalComponent } from './components/modals/onboarding/add-teacher-modal/add-teacher-modal.component';
import { TeacherManagementComponent } from './pages/school/teacher-management/teacher-management.component';
import { StaffManagementComponent } from './pages/school/staff-management/staff-management.component';
import { AddStaffModalComponent } from './components/modals/onboarding/add-staff-modal/add-staff-modal.component';
import { AddStandardModalComponent } from './components/modals/onboarding/add-standard-modal/add-standard-modal.component';
import { ClassManagementComponent } from './pages/school/class-management/class-management.component';
import { SubjectManagementComponent } from './pages/school/subject-management/subject-management.component';
import { AddDivisionModalComponent } from './components/modals/onboarding/add-division-modal/add-division-modal.component';
import { AddSubjectModalComponent } from './components/modals/onboarding/add-subject-modal/add-subject-modal.component';
import { TeacherMappingModalComponent } from './components/modals/onboarding/teacher-mapping-modal/teacher-mapping-modal.component';
import { StudentMappingModalComponent } from './components/modals/onboarding/student-mapping-modal/student-mapping-modal.component';
import { TeacherMappingComponent } from './pages/school/teacher-mapping/teacher-mapping.component';
import { StudentMappingComponent } from './pages/school/student-mapping/student-mapping.component';
import { TeacherMasterpageComponent } from './pages/teacher/teacher-masterpage/teacher-masterpage.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { SubjectsComponent } from './pages/teacher/subjects/subjects.component';
import { SubjectCardComponent } from './components/lessons/lesson-preparation/subject-card/subject-card.component';
import { ChapterSelectionComponent } from './pages/teacher/chapter-selection/chapter-selection.component';
import { AddChapterModalComponent } from './components/modals/lessons/add-chapter-modal/add-chapter-modal.component';
import { ChapterCardComponent } from './components/lessons/lesson-preparation/chapter-card/chapter-card.component';
import { ChapterSublevelsComponent } from './pages/teacher/chapter-sublevels/chapter-sublevels.component';
import { SublevelCardComponent } from './components/lessons/lesson-preparation/sublevel-card/sublevel-card.component';
import { BoardChooserComponent } from './tools/board-chooser/board-chooser.component';
import { GoogleSlideCreatorComponent } from './components/digitalboard/tools/google-slide-creator/google-slide-creator.component';
import { RichTextEditorComponent } from './components/digitalboard/tools/rich-text-editor/rich-text-editor.component';
import { PDFFileUploadComponent } from './components/digitalboard//tools/pdffile-upload/pdffile-upload.component';
import { QAndAComponent } from './components/digitalboard//tools/q-and-a/q-and-a.component';
import { QuestionCardComponent } from './components/lessons/lesson-preparation/question-card/question-card.component';
import { SupportLessonCardComponent } from './components/lessons/lesson-preparation/support-lesson-card/support-lesson-card.component';
import { FormsModule } from '@angular/forms';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { StudentMasterpageComponent } from './pages/student/student-masterpage/student-masterpage.component';
import { StudentSubjectsComponent } from './pages/student/student-subjects/student-subjects.component';
import { StudentSubjectCardComponent } from "./components/lessons/learning/student-subject-card/student-subject-card.component";
import { StudentChapterCardComponent } from './components/lessons/learning/student-chapter-card/student-chapter-card.component'
import { CommonModule } from '@angular/common';
import { StudentChapterSelectionComponent } from './pages/student/student-chapter-selection/student-chapter-selection.component';
import { BookViewComponent } from './pages/student/book-view/book-view.component';
import { TextEditorViewComponent } from "./components/digitalboard/views/text-editor-view/text-editor-view.component"
import {GoogleSlideViewComponent } from "./components/digitalboard/views/google-slide-view/google-slide-view.component"
import { QandAViewComponent } from "./components/digitalboard/views/qand-aview/qand-aview.component";
import { AssesmentQuestionsComponent } from './pages/student/assesment-questions/assesment-questions.component';
import { TextEditorComponent } from './components/core/text-editor/text-editor.component';
import { UnitViewComponent } from './components/lessons/views/book-view/unit-view/unit-view.component';
import { SideNavigationComponent } from './components/lessons/views/book-view/side-navigation/side-navigation.component';
import { SortByPipe } from './pipes/SortBy/sort-by.pipe';
import { ProfilePageComponent } from './components/shared/profile-page/profile-page.component';
import { PresentViewComponent } from './pages/teacher/present-view/present-view.component'
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { ReportComponent } from './pages/teacher/report/report.component';
import { StudentMarksOverviewComponent } from './pages/teacher/reports/student-marks-overview/student-marks-overview.component';
import { DetailedStudentAnswersViewComponent } from './pages/teacher/reports/detailed-student-answers-view/detailed-student-answers-view.component';
import { UnderstandingReportsComponent } from './pages/teacher/reports/understanding-reports/understanding-reports.component';
import { UnderstandingReportsDetailedViewComponent } from './pages/teacher/reports/understanding-reports-detailed-view/understanding-reports-detailed-view.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CreateSimpleActivityComponent } from './pages/teacher/activities/create-simple-activity/create-simple-activity.component';
import { SimpleActivityComponent } from './components/lessons/learning/simple-activity/simple-activity.component';
import { ParentMasterpageComponent } from './pages/parent/parent-masterpage/parent-masterpage.component';
import { PrincipalMasterpageComponent } from './pages/principal/principal-masterpage/principal-masterpage.component';
import { ParentDashboardComponent } from './pages/parent/parent-dashboard/parent-dashboard.component';
import { StudentsListComponent } from './pages/parent/reports/students-list/students-list.component';
import { ReportSelectionComponent } from './pages/parent/reports/report-selection/report-selection.component';
import { ActivityReportsComponent } from './pages/teacher/reports/activity-reports/activity-reports.component';
import { BreadcrumbComponent } from './components/core/breadcrumb/breadcrumb.component';
import { ClassListComponent } from './pages/principal/reports/class-list/class-list.component';
import { SkillsHomeComponent } from './pages/digital-skills/skills-home/skills-home.component';
import { AdobeSparkComponent } from './components/digitalboard/tools/adobe-spark/adobe-spark.component';
import { AdobeSparkViewComponent } from './components/digitalboard/views/adobe-spark-view/adobe-spark-view.component';
import { PaintComponent } from './components/core/paint/paint.component';
import { StudentCardComponent } from './components/reports/student-card/student-card.component';
import { SubjectSelectionComponent } from './pages/parent/reports/subject-selection/subject-selection.component';
import {LessonSelectionComponent } from "./pages/parent/reports/lesson-selection/lesson-selection.component"
import { AssesmentQuestionReportsComponent } from "./pages/parent/reports/assesment-question-reports/assesment-question-reports.component";
import { StudentMarkDetailsComponent } from './components/reports/student-mark-details/student-mark-details.component';
import { SelfAssesmentReportsComponent } from './components/reports/self-assesment-reports/self-assesment-reports.component';
import { IntroComponent } from './components/core/intro/intro.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { ParentBreadcrumbComponent } from "./components/core/parent-breadcrumb/parent-breadcrumb.component";
import { CmMasterpageComponent } from './pages/cm/cm-masterpage/cm-masterpage.component';
import { CmDigitalSkillListComponent } from './pages/cm/cm-digital-skill-list/cm-digital-skill-list.component';
import { CmAddNewDigitalSkillComponent } from './pages/cm/cm-add-new-digital-skill/cm-add-new-digital-skill.component';
import { CmManageDigtialSkillContentComponent } from './pages/cm/cm-manage-digtial-skill-content/cm-manage-digtial-skill-content.component';
import { DigitalLessonCardComponent } from './components/digital-skills/digital-lesson-card/digital-lesson-card.component';
import { CmDigitalSkillContentListComponent } from './pages/cm/cm-digital-skill-content-list/cm-digital-skill-content-list.component';
import { DigitalContentCardComponent } from './components/digital-skills/digital-content-card/digital-content-card.component';
import { DigitalSkillTypesComponent } from './pages/student/digital-skill-types/digital-skill-types.component';
import { DigitalSkillListComponent } from './pages/student/digital-skill-list/digital-skill-list.component';
import { DigitalSkillViewComponent } from './pages/student/digital-skill-view/digital-skill-view.component';
import { DigitalSkillComponentViewComponent } from './components/digital-skills/digital-skill-component-view/digital-skill-component-view.component';
import { SafePipe } from './pipes/safe/safe.pipe';
import { GeogibraEquationEditorComponent } from './components/core/geogibra-equation-editor/geogibra-equation-editor.component';
import { AssignmentSubmissionFormComponent } from './components/digital-skills/assignment-submission-form/assignment-submission-form.component';
import {Component, Inject} from '@angular/core';
import { UploadAssignmentModalComponent } from './components/digital-skills/upload-assignment-modal/upload-assignment-modal.component';
import { StageCardComponent } from './components/digital-skills/stage-card/stage-card.component';
import { StageListComponent } from './components/digital-skills/stage-list/stage-list.component';
import { ListSubmittedAssignmentComponent } from './components/digital-skills/list-submitted-assignment/list-submitted-assignment.component';
import { DigitalSkillMappingComponent } from './pages/school/digital-skill-mapping/digital-skill-mapping.component';
import { DigitalSkillTeacherMappingModalComponent } from './pages/school/components/digital-skill-teacher-mapping-modal/digital-skill-teacher-mapping-modal.component';
import { DigitallSkillClassesComponent } from './pages/teacher/digitall-skill-classes/digitall-skill-classes.component';
import { DigitallSkillValuationListComponent } from './pages/teacher/digitall-skill-valuation-list/digitall-skill-valuation-list.component';
import { DigitallSkillValuationSubmissionsComponent } from './pages/teacher/digitall-skill-valuation-submissions/digitall-skill-valuation-submissions.component';
import { ClassCardComponent } from './pages/teacher/components/class-card/class-card.component';
import { DigitallSkillSubmissionsComponent } from './pages/teacher/digitall-skill-submissions/digitall-skill-submissions.component';
import { DigitalSkillsSubmissionHistoryComponent } from './components/digital-skills-submission-history/digital-skills-submission-history.component';
import { SubmissionHistoryComponent } from './components/digital-skills/submission-history/submission-history.component';
import { DigitalSkillMentorMappingComponent } from './pages/school/components/digital-skill-mentor-mapping/digital-skill-mentor-mapping.component';
import { DigitalSkillMentorsComponent } from './pages/school/digital-skill-mentors/digital-skill-mentors.component';
import { ActivityReportDetailedViewComponent } from './pages/teacher/reports/activity-report-detailed-view/activity-report-detailed-view.component';
import { DashboardComponent } from './pages/teacher/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { MapSectionHeadComponent } from './pages/school/components/map-section-head/map-section-head.component';
import { SectionHeadsComponent } from './pages/school/section-heads/section-heads.component';
import { MaterialModuleModule } from "./material-module/material-module.module";
import { SectionDashboardComponent } from './pages/teacher/section-dashboard/section-dashboard.component';
import { GroupCountsComponent } from './components/dashboard/group-counts/group-counts.component'
import { DashboardComponent as PrincipalDashboard } from './pages/principal/dashboard/dashboard.component';
import { PDFViewComponent } from './components/digitalboard/views/pdfview/pdfview.component';
import { ShareChapterComponent } from './pages/teacher/components/share-chapter/share-chapter.component';
import { ClassesListComponent } from './pages/principal/components/classes-list/classes-list.component';
import { LessonPlanCountComponent } from './pages/teacher/components/lesson-plan-count/lesson-plan-count.component'
import {MatIconModule} from '@angular/material/icon';
import { TeacherProfileComponent } from './pages/teacher/teacher-profile/teacher-profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SchoolProfileComponent } from './pages/school/school-profile/school-profile.component';
import { ForgotPasswordComponent } from './pages/guest/forgot-password/forgot-password.component';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmPasswordComponent } from './pages/guest/confirm-password/confirm-password.component';
import { SectionClassesComponent } from './pages/principal/section-classes/section-classes.component';
import { ClassSubjectsComponent } from './pages/principal/class-subjects/class-subjects.component';
import { ChaptersComponent } from './pages/principal/chapters/chapters.component';
import { ExperientialLearningComponent } from './pages/teacher/activities/experiential-learning/experiential-learning.component';
import { ExperientialActivityComponent } from './components/lessons/learning/experiential-activity/experiential-activity.component';
import { SectionSubjectsComponent } from './pages/teacher/section-subjects/section-subjects.component';
import { SectionChapaterListComponent } from './pages/teacher/section-chapater-list/section-chapater-list.component';
import { AssesmntPreviewComponent } from './pages/student/components/assesmnt-preview/assesmnt-preview.component';
import { ClassDashboardComponent } from './pages/teacher/class-dashboard/class-dashboard.component';
import { ClassTeacherMappingComponent } from './pages/school/components/class-teacher-mapping/class-teacher-mapping.component';
import { ClassTeacherListComponent } from './pages/school/class-teacher-list/class-teacher-list.component';
import { ChapterAddModalComponent } from './pages/teacher/chapter-add-modal/chapter-add-modal.component';
import { ClassSubjectProgressComponent } from './pages/teacher/components/class-subject-progress/class-subject-progress.component';
import { ChapterMicrounitCountModalComponent } from './pages/teacher/chapter-microunit-count-modal/chapter-microunit-count-modal.component'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarModalComponent } from './pages/calendar-modal/calendar-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { BreadcrumpComponent } from './pages/principal/breadcrump/breadcrump.component';
import { PrincipalReportComponent } from './pages/principal/principal-report/principal-report.component';
import { ActivityReportOverviewComponent } from './pages/principal/reports/activity-report-overview/activity-report-overview.component';
import { SelfAssessmentReportComponent } from './pages/principal/reports/self-assessment-report/self-assessment-report.component';
import { SimpleActivityReportComponent } from './pages/principal/reports/simple-activity-report/simple-activity-report.component';
import { PostAssessmentStudentReportComponent } from './pages/principal/reports/post-assessment-student-report/post-assessment-student-report.component';
import { HodDashboardComponent } from './pages/teacher/hod-dashboard/hod-dashboard.component';
import { HodListClassesComponent } from './pages/teacher/HOD/hod-list-classes/hod-list-classes.component';
import { HodListLessonComponent } from './pages/teacher/HOD/hod-list-lesson/hod-list-lesson.component';
import { LessonSubLevelsComponent } from './pages/teacher/HOD/lesson-sub-levels/lesson-sub-levels.component';
import { HodBookViewComponent } from './pages/teacher/HOD/hod-book-view/hod-book-view.component';
import { HodApprovalModalComponent } from './pages/teacher/HOD/hod-approval-modal/hod-approval-modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StudentRegisterComponent } from './pages/guest/student-register/student-register.component';
import { RegistrationOtpModalComponent } from './pages/guest/registration-otp-modal/registration-otp-modal.component';
import { NotificationComponent } from './pages/teacher/notification/notification.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ActivityListSelectionComponent } from './pages/teacher/activity-list-selection/activity-list-selection.component';
import { NgxFeedbackModule } from 'ngx-feedback';
import { HodMappingComponent } from './pages/school/hod-mapping/hod-mapping.component';
import { HodMappingModalComponent } from './components/modals/onboarding/hod-mapping-modal/hod-mapping-modal.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CmLabComponent } from './pages/cm/cm-lab/cm-lab.component';
import { LabNewCourseModalComponent } from './pages/cm/lab-new-course-modal/lab-new-course-modal.component';
import { LabMicrocontrollerComponent } from './pages/cm/lab-microcontroller/lab-microcontroller.component';
import { LabInventoryModalComponent } from './pages/cm/lab-inventory-modal/lab-inventory-modal.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
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
import { SearchfilterPipe } from './pipes/SearchFilter/searchfilter.pipe';
import { CmFeedbackMainComponent } from './pages/cm/cm-feedback-main/cm-feedback-main.component';
import { CmFeedbackModalComponent } from './pages/cm/cm-feedback-modal/cm-feedback-modal.component';
import { TeacherLabEvaluationCourseListComponent } from './pages/teacher/teacher-lab-evaluation-course-list/teacher-lab-evaluation-course-list.component';
import { TeacherLabEvaluationStudentSelectionComponent } from './pages/teacher/teacher-lab-evaluation-student-selection/teacher-lab-evaluation-student-selection.component';
import { TeacherEvaluationStudentDataComponent } from './pages/teacher/teacher-evaluation-student-data/teacher-evaluation-student-data.component';
import { TeacherEvaluationTaskContentComponent } from './pages/teacher/teacher-evaluation-task-content/teacher-evaluation-task-content.component';
import {MatSortModule} from '@angular/material/sort';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { TeacherEvaluationChallengeTaskFeedbackModalComponent } from './pages/teacher/teacher-evaluation-challenge-task-feedback-modal/teacher-evaluation-challenge-task-feedback-modal.component';
import { StudentNotAttendedModalComponent } from './pages/teacher/reports/student-not-attended-modal/student-not-attended-modal.component';
import { StudentDeactivateConfirmationModalComponent } from './pages/teacher/student-deactivate-confirmation-modal/student-deactivate-confirmation-modal.component';
import { StudentPromotionFilterComponent } from './pages/school/student-promotion-filter/student-promotion-filter.component';
import { StudentPromotionClassSelectionModalComponent } from './pages/school/student-promotion-class-selection-modal/student-promotion-class-selection-modal.component';
import { StudentTransferModalComponent } from './pages/school/student-transfer-modal/student-transfer-modal.component';
import { SectionMappingComponent } from './pages/school/section-mapping/section-mapping.component';
import { AddSectionModalComponent } from './components/modals/onboarding/add-section-modal/add-section-modal.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ListClassesComponent } from './pages/student/previous-year-data/list-classes/list-classes.component';
import { ListPreviousSubjectComponent } from './pages/student/previous-year-data/list-previous-subject/list-previous-subject.component';
import { ActivityReviewRejectCommentModalComponent } from './pages/teacher/reports/activity-review-reject-comment-modal/activity-review-reject-comment-modal.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStategy } from './RouteReuseService';
import { StudentNotificationComponent } from './pages/student/student-notification/student-notification.component';
import { UnitComponent } from './pages/teacher/unit/unit.component';
import { UnitCardComponent } from './components/lessons/lesson-preparation/unit-card/unit-card.component';
import { AddUnitModalComponent } from './pages/teacher/add-unit-modal/add-unit-modal.component';
import { StudentUnitSelectionComponent } from './pages/student/student-unit-selection/student-unit-selection.component';
import { StudentUnitCardComponent } from './components/lessons/learning/student-unit-card/student-unit-card.component';
import { KeyConceptFrameComponent } from './components/lessons/lesson-preparation/key-concept-frame/key-concept-frame.component';
import { SimpleActivityUnderstandingQuestionCollectionComponent } from './components/lessons/lesson-preparation/simple-activity-understanding-question-collection/simple-activity-understanding-question-collection.component';
import { StudentUnitThemeModalComponent } from './pages/student/student-unit-theme-modal/student-unit-theme-modal.component';
import { PrincipalUnitViewComponent } from './pages/principal/principal-unit-view/principal-unit-view.component';
import { CmLevelUpComponent } from './pages/cm/cm-level-up/cm-level-up.component';
import { CmAddLevelModalComponent } from './pages/cm/cm-add-level-modal/cm-add-level-modal.component';
import { CmBatchesComponent } from './pages/cm/cm-batches/cm-batches.component';
import { CmBatchCreateModalComponent } from './pages/cm/cm-batch-create-modal/cm-batch-create-modal.component';
import { TeacherBatchManageComponent } from './pages/teacher/teacher-batch-manage/teacher-batch-manage.component';
import { TeacherBatchModuleComponent } from './pages/teacher/teacher-batch-module/teacher-batch-module.component';
import { BatchDetailsComponent } from './pages/teacher/batch-details/batch-details.component';
import { BatchCodeComponent } from './pages/teacher/batch-code/batch-code.component';
import { TeacherLabAllModulesComponent } from './pages/teacher/teacher-lab-all-modules/teacher-lab-all-modules.component';
import { TeacherLabViewFileModalComponent } from './pages/teacher/teacher-lab-view-file-modal/teacher-lab-view-file-modal.component';
import { TeacherEvaluationChallengeTaskRejectModalComponent } from './pages/teacher/teacher-evaluation-challenge-task-reject-modal/teacher-evaluation-challenge-task-reject-modal.component';
import { TeacherLabViewSourceCodeModalComponent } from './pages/teacher/teacher-lab-view-source-code-modal/teacher-lab-view-source-code-modal.component';
import { TeacherSubjectSelectionModeModalComponent } from './pages/teacher/teacher-subject-selection-mode-modal/teacher-subject-selection-mode-modal.component';
import { ChapterSelectionDirectComponent } from './pages/teacher/chapter-selection-direct/chapter-selection-direct.component';
import { ScientificActivityComponent } from './components/lessons/learning/scientific-activity/scientific-activity.component';
import { KgChaptersComponent } from './pages/teacher/KG/kg-chapters/kg-chapters.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolRegisterComponent,
    SchoolMasterpageComponent,
    SchoolDashboardComponent,
    ParentsComponent,
    AddParentModalComponent,
    StudentManagementComponent,
    AddStudentModalComponent,
    AddTeacherModalComponent,
    TeacherManagementComponent,
    StaffManagementComponent,
    AddStaffModalComponent,
    AddStandardModalComponent,
    ClassManagementComponent,
    SubjectManagementComponent,
    AddDivisionModalComponent,
    AddSubjectModalComponent,
    TeacherMappingModalComponent,
    StudentMappingModalComponent,
    TeacherMappingComponent,
    StudentMappingComponent,
    TeacherMasterpageComponent,
    TeacherDashboardComponent,
    SubjectsComponent,
    SubjectCardComponent,
    ChapterSelectionComponent,
    AddChapterModalComponent,
    ChapterCardComponent,
    ChapterSublevelsComponent,
    SublevelCardComponent,
    BoardChooserComponent,
    GoogleSlideCreatorComponent,
    RichTextEditorComponent,
    PDFFileUploadComponent,
    QAndAComponent,
    QuestionCardComponent,
    SupportLessonCardComponent,
    StudentMasterpageComponent,
    StudentSubjectsComponent,
    StudentSubjectCardComponent,
    StudentChapterCardComponent,
    StudentChapterSelectionComponent,
    BookViewComponent,
    TextEditorViewComponent,
    GoogleSlideViewComponent,
    QandAViewComponent,
    AssesmentQuestionsComponent,
    TextEditorComponent,
    UnitViewComponent,
    SideNavigationComponent,
    SortByPipe,
    ProfilePageComponent,
    PresentViewComponent,
    ReportComponent,
    StudentMarksOverviewComponent,
    DetailedStudentAnswersViewComponent,
    UnderstandingReportsComponent,
    UnderstandingReportsDetailedViewComponent,
    CreateSimpleActivityComponent,
    SimpleActivityComponent,
    ParentMasterpageComponent,
    PrincipalMasterpageComponent,
    ParentDashboardComponent,
    StudentsListComponent,
    ReportSelectionComponent,
    ActivityReportsComponent,
    BreadcrumbComponent,
    ClassListComponent,
    SkillsHomeComponent,
    AdobeSparkComponent,
    AdobeSparkViewComponent,
    PaintComponent,
    StudentCardComponent,
    SubjectSelectionComponent,
    LessonSelectionComponent,
    AssesmentQuestionReportsComponent,
    StudentMarkDetailsComponent,
    SelfAssesmentReportsComponent,
    IntroComponent,
    StudentDashboardComponent,
    ParentBreadcrumbComponent,
    CmMasterpageComponent,
    CmDigitalSkillListComponent,
    CmAddNewDigitalSkillComponent,
    CmManageDigtialSkillContentComponent,
    DigitalLessonCardComponent,
    CmDigitalSkillContentListComponent,
    DigitalContentCardComponent,
    DigitalSkillTypesComponent,
    DigitalSkillListComponent,
    DigitalSkillViewComponent,
    DigitalSkillComponentViewComponent,
    SafePipe,
    GeogibraEquationEditorComponent,
    AssignmentSubmissionFormComponent,
    UploadAssignmentModalComponent,
    StageCardComponent,
    StageListComponent,
    ListSubmittedAssignmentComponent,
    DigitalSkillMappingComponent,
    DigitalSkillTeacherMappingModalComponent,
    DigitallSkillClassesComponent,
    DigitallSkillValuationListComponent,
    DigitallSkillValuationSubmissionsComponent,
    ClassCardComponent,
    DigitallSkillSubmissionsComponent,
    DigitalSkillsSubmissionHistoryComponent,
    SubmissionHistoryComponent,
    DigitalSkillMentorMappingComponent,
    DigitalSkillMentorsComponent,
    ActivityReportDetailedViewComponent,
    DashboardComponent,
    MapSectionHeadComponent,
    SectionHeadsComponent,
    SectionDashboardComponent,
    GroupCountsComponent,
    PrincipalDashboard,
    PDFViewComponent,
    ShareChapterComponent,
    ClassesListComponent,
    LessonPlanCountComponent,
    TeacherProfileComponent,
    SchoolProfileComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    SectionClassesComponent,
    ClassSubjectsComponent,
    ChaptersComponent,
    ExperientialLearningComponent,
    ExperientialActivityComponent,
    SectionSubjectsComponent,
    SectionChapaterListComponent,
    AssesmntPreviewComponent,
    ClassDashboardComponent,
    ClassTeacherMappingComponent,
    ClassTeacherListComponent,
    AddChapterModalComponent,
    ChapterAddModalComponent,
    ClassSubjectProgressComponent,
    ChapterMicrounitCountModalComponent,
    CalendarComponent,
    CalendarModalComponent,
    BreadcrumpComponent,
    PrincipalReportComponent,
    ActivityReportOverviewComponent,
    SelfAssessmentReportComponent,
    SimpleActivityReportComponent,
    PostAssessmentStudentReportComponent,
    HodDashboardComponent,
    HodListClassesComponent,
    HodListLessonComponent,
    LessonSubLevelsComponent,
    HodBookViewComponent,
    HodApprovalModalComponent,
    SpinnerComponent,
    StudentRegisterComponent,
    RegistrationOtpModalComponent,
    NotificationComponent,
    ActivityListSelectionComponent,
    HodMappingComponent,
    HodMappingModalComponent,
    CmLabComponent,
    LabNewCourseModalComponent,
    LabMicrocontrollerComponent,
    LabInventoryModalComponent,
    CmBookViewComponent,
    CmSideNavigationComponent,
    CmUnitViewComponent,
    ContentViewComponent,
    StudentLabComponent,
    TeacherLabComponent,
    TeacherSwitchBackComponent,
    LabChallengesModalComponent,
    CmChallengeTaskComponent,
    CmTaskModalComponent,
    TaskMediaUploadModalComponent,
    TeacherLabEvaluationComponent,
    ChapterSublevelPresentModalComponent,
    SearchfilterPipe,
    CmFeedbackMainComponent,
    CmFeedbackModalComponent,
    TeacherLabEvaluationCourseListComponent,
    TeacherLabEvaluationStudentSelectionComponent,
    TeacherEvaluationStudentDataComponent,
    TeacherEvaluationTaskContentComponent,
    OrderByPipe,
    TeacherEvaluationChallengeTaskFeedbackModalComponent,
    StudentNotAttendedModalComponent,
    StudentDeactivateConfirmationModalComponent,
    StudentPromotionFilterComponent,
    StudentPromotionClassSelectionModalComponent,
    StudentTransferModalComponent,
    SectionMappingComponent,
    AddSectionModalComponent,
    ListClassesComponent,
    ListPreviousSubjectComponent,
    ActivityReviewRejectCommentModalComponent,
    StudentNotificationComponent,
    UnitComponent,
    UnitCardComponent,
    AddUnitModalComponent,
    StudentUnitSelectionComponent,
    StudentUnitCardComponent,
    KeyConceptFrameComponent,
    SimpleActivityUnderstandingQuestionCollectionComponent,
    StudentUnitThemeModalComponent,
    PrincipalUnitViewComponent,
    CmLevelUpComponent,
    CmAddLevelModalComponent,
    CmBatchesComponent,
    CmBatchCreateModalComponent,
    TeacherBatchManageComponent,
    TeacherBatchModuleComponent,
    BatchDetailsComponent,
    BatchCodeComponent,
    TeacherLabAllModulesComponent,
    TeacherLabViewFileModalComponent,
    TeacherEvaluationChallengeTaskRejectModalComponent,
    TeacherLabViewSourceCodeModalComponent,
    TeacherSubjectSelectionModeModalComponent,
    ChapterSelectionDirectComponent,
    ScientificActivityComponent,
    KgChaptersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    BrowserAnimationsModule, 
    FormsModule,
    PdfJsViewerModule,
    PasswordStrengthMeterModule,
    NgxChartsModule,
    NgxBootstrapConfirmModule,
    MaterialModuleModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    NgxFeedbackModule,
    AngularFileUploaderModule,
    MatSortModule,
    MatAutocompleteModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{
   
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,

    multi: true
  },
  {
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStategy,

    
    }],

  
    
  bootstrap: [AppComponent]
})
export class AppModule { }
