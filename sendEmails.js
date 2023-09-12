import nodemailer from "nodemailer";
import google from "googleapis";

const OAUTH2 = google.auth;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID, MAILING_SERVICE_CLIENT_SECRET, MAILING_SERVICE_REFRESH_TOKEN }
