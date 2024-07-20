 create or replace view study_year as  SELECT organizers.applicants.year,                                                                                 
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.can_view_user_details OR permissions.super_admin OR (CURRENT_USER = 'postgres'::name)) 
   GROUP BY organizers.applicants.year                                                                                                                    
  HAVING (organizers.applicants.year IS NOT NULL);



 create or replace view gender_demographics as  SELECT organizers.applicants.gender,                                                                      
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE ((auth.uid() = organizers.applicants.id) OR permissions.super_admin OR permissions.can_view_demographics OR (CURRENT_USER = 'postgres'::name))   
   GROUP BY organizers.applicants.gender;



 create or replace view race_demographics as  SELECT organizers.applicants.race,                                                                          
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE ((auth.uid() = organizers.applicants.id) OR permissions.super_admin OR permissions.can_view_demographics OR (CURRENT_USER = 'postgres'::name))   
   GROUP BY organizers.applicants.race;



 create or replace view ethnicity_count as  SELECT organizers.applicants.ethnicity,                                                                       
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE ((auth.uid() = organizers.applicants.id) OR permissions.super_admin OR permissions.can_view_demographics OR (CURRENT_USER = 'postgres'::name))   
   GROUP BY organizers.applicants.ethnicity;



 create or replace view university_count as  SELECT organizers.applicants.university,                                                                     
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((permissions.user_id = auth.uid())))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.can_view_user_details OR permissions.super_admin OR (CURRENT_USER = 'postgres'::name)) 
   GROUP BY organizers.applicants.university;


 create or replace view major_count as  SELECT organizers.applicants.major,                                                                               
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.can_view_user_details OR permissions.super_admin OR (CURRENT_USER = 'postgres'::name)) 
   GROUP BY organizers.applicants.major;


 create or replace view year_count as  SELECT organizers.applicants.year,                                                                                 
     count(*) AS count                                                                                                                         
    FROM (organizers.applicants                                                                                                                           
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.can_view_user_details OR permissions.super_admin OR (CURRENT_USER = 'postgres'::name)) 
   GROUP BY organizers.applicants.year;


 create or replace view dietary_needs as  SELECT diet.dietary,                                                                                 
     diet.count                                                                                                                                
    FROM (( SELECT array_to_string(organizers.applicants.dietary, ','::text) AS dietary,                                                                  
             count(*) AS count                                                                                                                 
            FROM organizers.applicants                                                                                                                    
           WHERE ((organizers.applicants.dietary IS NOT NULL) AND (applicants.dietary <> '{}'::text[]))                                                   
           GROUP BY organizers.applicants.dietary                                                                                                         
         UNION ALL                                                                                                                             
          SELECT 'None'::text AS dietary,                                                                                                      
             count(*) AS count                                                                                                                 
            FROM organizers.applicants                                                                                                                    
           WHERE ((organizers.applicants.dietary IS NULL) OR (applicants.dietary = '{}'::text[]))) diet                                                   
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.can_view_user_details OR permissions.super_admin OR (CURRENT_USER = 'postgres'::name));


 create or replace view applications_by_status as  SELECT users.application_status,                                                            
     count(*) AS count                                                                                                                         
    FROM ((users                                                                                                                               
      JOIN organizers.applicants ON ((applicants.id = users.user_id)))                                                                                    
      LEFT JOIN permissions ON ((auth.uid() = permissions.user_id)))                                                                           
   WHERE (permissions.can_view_agg_stats OR permissions.super_admin OR (auth.uid() = users.user_id))                                           
   GROUP BY users.application_status;


