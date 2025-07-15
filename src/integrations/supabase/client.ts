
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://pczvumazsjbgdrncobvb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjenZ1bWF6c2piZ2RybmNvYnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTEzNjEsImV4cCI6MjA2NzQ4NzM2MX0.j2hh_09X8RdRKFGHTPy6YJao40ALOfdZEki9Fp-JITo"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
