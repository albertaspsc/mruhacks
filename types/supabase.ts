export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          created_at: string | null
          description: string | null
          end: string | null
          id: string | null
          parent: string | null
          start: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end?: string | null
          id?: string | null
          parent?: string | null
          start: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end?: string | null
          id?: string | null
          parent?: string | null
          start?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_parent_fkey"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      org_mems: {
        Row: {
          Email: string | null
          "First Name": string | null
          id: string
          "Last Name": string | null
          Lead: string | null
          Role: string | null
          Teams: string | null
        }
        Insert: {
          Email?: string | null
          "First Name"?: string | null
          id?: string
          "Last Name"?: string | null
          Lead?: string | null
          Role?: string | null
          Teams?: string | null
        }
        Update: {
          Email?: string | null
          "First Name"?: string | null
          id?: string
          "Last Name"?: string | null
          Lead?: string | null
          Role?: string | null
          Teams?: string | null
        }
        Relationships: []
      }
      organizers: {
        Row: {
          date_added: string
          is_lead: boolean
          role: string | null
          team: string | null
          user_id: string
        }
        Insert: {
          date_added?: string
          is_lead?: boolean
          role?: string | null
          team?: string | null
          user_id?: string
        }
        Update: {
          date_added?: string
          is_lead?: boolean
          role?: string | null
          team?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organizers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "account_flags"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "organizers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "application_status"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "organizers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "named_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "organizers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      permissions: {
        Row: {
          can_modify_events: boolean | null
          can_view_agg_stats: boolean | null
          can_view_demographics: boolean | null
          can_view_user_details: boolean | null
          created_at: string
          super_admin: boolean | null
          user_id: string
        }
        Insert: {
          can_modify_events?: boolean | null
          can_view_agg_stats?: boolean | null
          can_view_demographics?: boolean | null
          can_view_user_details?: boolean | null
          created_at?: string
          super_admin?: boolean | null
          user_id: string
        }
        Update: {
          can_modify_events?: boolean | null
          can_view_agg_stats?: boolean | null
          can_view_demographics?: boolean | null
          can_view_user_details?: boolean | null
          created_at?: string
          super_admin?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "account_flags"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "application_status"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "named_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      registrations: {
        Row: {
          additional: string | null
          age: number
          dietary: string[] | null
          email: string
          ethnicity: string | null
          first_name: string | null
          gender: string | null
          github: string | null
          hackathons: number | null
          hearAbout: string | null
          id: string
          last_name: string | null
          linkedin: string | null
          major: string | null
          personalSite: string | null
          race: string | null
          software_exp: string | null
          sponsorConsent: string | null
          timeSubmitted: string
          university: string | null
          year: string
        }
        Insert: {
          additional?: string | null
          age: number
          dietary?: string[] | null
          email: string
          ethnicity?: string | null
          first_name?: string | null
          gender?: string | null
          github?: string | null
          hackathons?: number | null
          hearAbout?: string | null
          id: string
          last_name?: string | null
          linkedin?: string | null
          major?: string | null
          personalSite?: string | null
          race?: string | null
          software_exp?: string | null
          sponsorConsent?: string | null
          timeSubmitted?: string
          university?: string | null
          year: string
        }
        Update: {
          additional?: string | null
          age?: number
          dietary?: string[] | null
          email?: string
          ethnicity?: string | null
          first_name?: string | null
          gender?: string | null
          github?: string | null
          hackathons?: number | null
          hearAbout?: string | null
          id?: string
          last_name?: string | null
          linkedin?: string | null
          major?: string | null
          personalSite?: string | null
          race?: string | null
          software_exp?: string | null
          sponsorConsent?: string | null
          timeSubmitted?: string
          university?: string | null
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "registrations_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "account_flags"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "registrations_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "application_status"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "registrations_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "named_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "registrations_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      universities: {
        Row: {
          alpha_two_code: string | null
          country: string | null
          id: number
          name: string
          state: string | null
        }
        Insert: {
          alpha_two_code?: string | null
          country?: string | null
          id?: number
          name: string
          state?: string | null
        }
        Update: {
          alpha_two_code?: string | null
          country?: string | null
          id?: number
          name?: string
          state?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          application_status: string
          email: string
          testing_account: boolean
          user_id: string
        }
        Insert: {
          application_status?: string
          email: string
          testing_account?: boolean
          user_id: string
        }
        Update: {
          application_status?: string
          email?: string
          testing_account?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      account_flags: {
        Row: {
          is_organizer: boolean | null
          testing_account: boolean | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      application_status: {
        Row: {
          application_status: string | null
          dietary: string[] | null
          email: string | null
          github: string | null
          hackathons: number | null
          linkedin: string | null
          major: string | null
          name: string | null
          personalSite: string | null
          sponsorConsent: string | null
          timeSubmitted: string | null
          university: string | null
          user_id: string | null
          year: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      applications_by_status: {
        Row: {
          application_status: string | null
          count: number | null
        }
        Relationships: []
      }
      dietary_needs: {
        Row: {
          count: number | null
          dietary: string | null
        }
        Relationships: []
      }
      dietary_restrictions: {
        Row: {
          count: number | null
          dietary: string[] | null
        }
        Relationships: []
      }
      ethnicity_count: {
        Row: {
          count: number | null
          ethnicity: string | null
        }
        Relationships: []
      }
      gender_demographics: {
        Row: {
          count: number | null
          gender: string | null
        }
        Relationships: []
      }
      major_count: {
        Row: {
          count: number | null
          major: string | null
        }
        Relationships: []
      }
      named_users: {
        Row: {
          email: string | null
          name: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      race_demographics: {
        Row: {
          count: number | null
          race: string | null
        }
        Relationships: []
      }
      study_year: {
        Row: {
          count: number | null
          year: string | null
        }
        Relationships: []
      }
      university_count: {
        Row: {
          count: number | null
          university: string | null
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          can_view_agg_stats: boolean | null
          can_view_demographics: boolean | null
          can_view_user_details: boolean | null
          created_at: string | null
          email: string | null
          name: string | null
          self: boolean | null
          super_admin: boolean | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "account_flags"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "application_status"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "named_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      year_count: {
        Row: {
          count: number | null
          year: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_organizer: {
        Args: {
          email: string
        }
        Returns: {
          user_id: number
          is_lead: boolean
        }[]
      }
      gtrgm_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      gtrgm_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      is_email_in_users: {
        Args: {
          email_to_check: string
        }
        Returns: boolean
      }
      is_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_limit: {
        Args: {
          "": number
        }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: {
          "": string
        }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
