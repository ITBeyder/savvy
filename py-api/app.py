import requests
ipgeolocation_api_key = 'da3d3da449a348b0a9bcb3ad6e3d9466'
ipaddr = '8.8.8.8'
ipgeolocation_url = f'https://api.ipgeolocation.io/timezone?apiKey={ipgeolocation_api_key}&ip={ipaddr}'

def get_time_zone():
    try:
        response = requests.get(ipgeolocation_url)
        response.raise_for_status()
        data = response.json()
        timezone = data.get('timezone')
        print(f'Time Zone for IP {ipaddr}: {timezone}')
    except requests.exceptions.RequestException as e:
        print(f'Error fetching time zone: {e}')
        
get_time_zone()
