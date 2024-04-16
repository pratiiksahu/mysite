from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def index(request):
    # Render the index.html template
    return render(request, 'index.html')

@api_view(['POST'])
def increment_count(request):
    print("Increment Count Triggered")
    # Get the count value from the request data
    count = request.data.get('count', 0)
    
    # Increment the count
    count += 1
    
    # Send the updated count back to the frontend
    return Response({'count': count}, content_type='application/javascript')
