CREATE TABLE vaccination_code (
  code TEXT NOT NULL,
  confirmed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO vaccination_code VALUES ('DUMMY', false);
