import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qifiqoivgewjhzlmvtfl.supabase.co';
const supabaseAnonKey = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc',
  '3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZmlxb2l2Z2V',
  '3amh6bG12dGZsIiwicm9sZSI6ImFub24iLCJpYXQiO',
  'jE3NTA0MTYxMjYsImV4cCI6MjA2NTk5MjEyNn0.w86',
  'OcZonb7X74-ngfFY3u3NZXaFh6P5YHw7X9_0I-yo'
].join('');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
