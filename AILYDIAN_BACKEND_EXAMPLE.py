from ailydian_client import AILYDIANBackend

backend = AILYDIANBackend(project_id="medical.ailydian.com")
print("Backend connected:", backend.project_id)
