from django.test import TestCase
from django.urls import reverse


class CoreViewsTest(TestCase):

    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_dashboard_page(self):
        response = self.client.get('/dashboard/')
        self.assertEqual(response.status_code, 200)