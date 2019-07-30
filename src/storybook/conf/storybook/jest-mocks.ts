import uuid from '@packages/modul-components/utils/uuid/uuid';

jest.mock('@packages/modul-components/utils/uuid/uuid');
(uuid.generate as jest.Mock).mockReturnValue('uuid');
