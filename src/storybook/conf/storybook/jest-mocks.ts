import uuid from '@ulaval/modul-components/dist/utils/uuid/uuid';

jest.mock('@ulaval/modul-components/dist/utils/uuid/uuid');
(uuid.generate as jest.Mock).mockReturnValue('uuid');
